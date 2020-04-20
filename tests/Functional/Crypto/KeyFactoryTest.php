<?php

declare(strict_types=1);

namespace Mathrix\Lumen\JWT\Tests\Functional\Crypto;

use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;
use Jose\Component\Signature\Algorithm\EdDSA;
use Jose\Component\Signature\Algorithm\ES256;
use Jose\Component\Signature\Algorithm\ES384;
use Jose\Component\Signature\Algorithm\ES512;
use Jose\Component\Signature\Algorithm\HS256;
use Jose\Component\Signature\Algorithm\HS384;
use Jose\Component\Signature\Algorithm\HS512;
use Jose\Component\Signature\Algorithm\RS256;
use Jose\Component\Signature\Algorithm\RS384;
use Jose\Component\Signature\Algorithm\RS512;
use Mathrix\Lumen\JWT\Constants;
use Mathrix\Lumen\JWT\Crypto\KeyFactory;
use Mathrix\Lumen\JWT\Exceptions\InvalidConfiguration;
use Mathrix\Lumen\JWT\Exceptions\MissingLibrary;
use Mathrix\Lumen\JWT\Tests\TestCase;
use Ramsey\Uuid\Uuid;
use function array_key_exists;
use function array_map;
use function file_exists;
use function md5_file;
use function storage_path;
use function unlink;

/**
 * @coversDefaultClass \Mathrix\Lumen\JWT\Crypto\KeyFactory
 */
class KeyFactoryTest extends TestCase
{
    /** @var KeyFactory $instance */
    private $instance;

    public function setUp(): void
    {
        parent::setUp();

        $this->instance = $this->app->make(KeyFactory::class);
    }

    /**
     * @testWith ["HS512", "Jose\\Component\\Signature\\Algorithm\\HS512"]
     *           ["Jose\\Component\\Signature\\Algorithm\\HS512", "Jose\\Component\\Signature\\Algorithm\\HS512"]
     * @testdox resolves $algorithm as $expectedAlgorithm.
     *
     * @param string $algorithm         The algorithm input.
     * @param string $expectedAlgorithm The algorithm output.
     */
    public function testGetAlgorithm(string $algorithm, string $expectedAlgorithm): void
    {
        $this->assertEquals($expectedAlgorithm, $this->instance->getAlgorithm($algorithm));
    }

    /**
     * @testdox fails to resolve an invalid algorithm.
     */
    public function testGetAlgorithmInvalid(): void
    {
        $this->expectException(InvalidConfiguration::class);
        $this->instance->getAlgorithm('Invalid');
    }

    /**
     * @return mixed[][] The key configuration dataset.
     */
    public function createCreateFromConfigDataset(): array
    {
        $configs = [
            [
                // Default configuration, covers RSA
                'path' => 'default',
            ],
            [
                'algorithm' => ES256::class,
            ],
            [
                'algorithm' => ES384::class,
                'curve'     => Constants::CURVE_P256,
            ],
            [
                'algorithm' => ES512::class,
                'curve'     => 'Invalid',
                'exception' => ValidationException::class,
            ],
            [
                'algorithm' => EdDSA::class,
            ],
            [
                'algorithm' => HS256::class,
                'path'      => 'default',
            ],
            [
                'algorithm' => HS384::class,
                'size'      => 385,
                'exception' => ValidationException::class,
            ],
            [
                'algorithm' => HS512::class,
                'size'      => 128,
                'exception' => ValidationException::class,
            ],
            [
                'algorithm' => RS256::class,
            ],
            [
                'algorithm' => RS384::class,
                'size'      => 2049,
                'exception' => ValidationException::class,
            ],
            [
                'algorithm' => RS512::class,
                'size'      => 2048,
                'exception' => ValidationException::class,
            ],
        ];

        return array_map(static function ($config) {
            if (array_key_exists('path', $config) && $config['path'] === 'default') {
                unset($config['path']);
            } else {
                $config['path'] = storage_path(Uuid::uuid4()->toString() . '.json');
            }

            return [$config];
        }, $configs);
    }

    /**
     * @dataProvider createCreateFromConfigDataset
     * @testdox      creates a new key.
     * @covers ::createFromConfig
     * @covers ::getDefaultConfig
     *
     * @param mixed[] $config The key configuration.
     *
     * @throws InvalidConfiguration
     * @throws MissingLibrary
     * @throws ValidationException
     */
    public function testCreateFromConfig(array $config): void
    {
        $expectedException = Arr::pull($config, 'exception');
        $expectedPath      = $config['path'] ?? storage_path('jwt.json');
        file_exists($expectedPath) && unlink($expectedPath);
        $this->assertFileDoesNotExist($expectedPath);

        if ($expectedException) {
            $this->expectException($expectedException);
        }

        $this->instance->createFromConfig($config);

        if (!$expectedException) {
            $this->assertFileExists($expectedPath);
            file_exists($expectedPath) && unlink($expectedPath);
        } else {
            $this->assertFileDoesNotExist($expectedPath);
        }
    }

    /**
     * @testdox loads an existing key and does not override it.
     * @covers ::createFromConfig
     *
     * @throws InvalidConfiguration
     * @throws MissingLibrary
     * @throws ValidationException
     */
    public function testCreateFromConfigExisting(): void
    {
        $expectedPath = storage_path('jwt.json');
        file_exists($expectedPath) && unlink($expectedPath);

        $this->instance->createFromConfig([]); // This create the actual key
        $this->assertFileExists($expectedPath);

        $md5Before = md5_file($expectedPath);
        $this->instance->createFromConfig([]); // This create the actual key
        $md5After = md5_file($expectedPath);

        $this->assertEquals($md5Before, $md5After);
        $this->assertFileExists($expectedPath);
        file_exists($expectedPath) && unlink($expectedPath);
    }
}
