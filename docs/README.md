# Guardian
![GitHub license](https://img.shields.io/github/license/mathieu-bour/guardian?style=flat-square)
![Packagist Version](https://img.shields.io/packagist/v/mathieu-bour/guardian?style=flat-square)
![Packagist](https://img.shields.io/packagist/dt/mathieu-bour/guardian?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/mathieu-bour/guardian?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mathieu-bour/guardian?style=flat-square)
![Codecov](https://img.shields.io/codecov/c/gh/mathieu-bour/guardian?style=flat-square)
![Scrutinizer code quality](https://img.shields.io/scrutinizer/quality/g/mathieu-bour/guardian?style=flat-square)

Highly configurable JSON Web Token implementation for Laravel and Lumen.

Guardian exposes an additional authentication `guardian` driver, which can be used like the standard `session` or `token` drivers.

Guardian follows the [Semantic Versioning specification](https://semver.org).

:heavy_exclamation_mark: **The `master` branch should not be considered stable prior to the 1.0.0 release.** :heavy_exclamation_mark:

[[toc]]


## Motivations
Our company based its back-end on the Lumen Framework and we needed a stateless identification and authentication method.
We chose to use the JSON Web Tokens which combines security and ease.
While some libraries exist like [tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth) or [laravel/passport](https://github.com/laravel/passport), they did not meet our requirements.
Indeed, we wanted to have control over the cryptographic algorithms of the keys as well as to be able to use several of them.

After careful consideration, we decided to develop our own JWT library for Lumen which was later ported to Laravel and shared open-source.


## Acknowledgements
- Rafhael Cedeno and [Laura Bannier](https://www.linkedin.com/in/laura-bannier/) for their English reviews
- JWT cryptography implementation by [`web-token`](https://github.com/web-token/jwt-framework)
- Benchmarks ran using [PHPBench](https://github.com/phpbench/phpbench)
- Documentation generated by [VuePress](https://vuepress.vuejs.org/)
- Tests ran using [PHPUnit](https://phpunit.de/) and [Mockery](https://github.com/mockery/mockery)


## Prerequisites
- PHP >= 7.2
- Laravel/Lumen 6 or 7


## Installation
Simply add Guardian to your project dependencies.

```bash
composer require mathieu-bour/guardian
```

Depending on the [algorithm](/reference/configuration.html#key) you want to use, install the corresponding cryptographic library:

| Algorithm | Library                                   | Required PHP extensions |
|-----------|-------------------------------------------|-------------------------|
| ECDSA     | `web-token/jwt-signature-algorithm-ecdsa` | openssl                 |
| EdDSA     | `web-token/jwt-signature-algorithm-eddsa` | sodium                  |
| HMAC      | `web-token/jwt-signature-algorithm-hmac`  | n/a                     |
| RSA       | `web-token/jwt-signature-algorithm-rsa`   | openssl, gmp            |

If you do not know which algorithm to choose, we recommend `ECDSA` with the `ES512` algorithm and the `P-521` curve.

### Laravel
Publish the default Guardian configuration:

```bash
php artisan vendor:publish --provider="Windy\Guardian\GuardianServiceProvider"
```

### Lumen
Copy the default Guardian configuration from `vendor/mathieu-bour/guardian/config/guardian.php` to `config/guardian.php`.
Then, add the provider to your `bootstrap/app.php` and load the configuration with:

```php
$app->configure('guardian');

$app->register(Windy\Guardian\GuardianServiceProvider::class);
```

If you want to use the `Guardian` Facade, ensure that the application is loaded with Facades in your `bootstrap/app.php`.

```php
$app->withFacades();
```


## Next steps
- Learn more about [JWT](/reference/jwt)
- Read the [configuration](/reference/configuration) reference
- Read our [tutorial on users authentication](/case-studies/authentication)


## Alternatives
Here, we humbly refer to the alternatives to Guardian that we found interesting.

### [laravel/passport](https://github.com/laravel/passport)
Passport is the official Laravel library which supports JWT authentication.

> Laravel makes API authentication a breeze using Laravel Passport, which provides a full OAuth2 server implementation for your Laravel application in a matter of minutes.

### [tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)
jwt-auth is a worthwhile alternative to Guardian which provides a higher-level API, such as authenticating users directly from the request credentials via a Facade.
jwt-auth also provides a way to blacklist the generated tokens whereas Guardian leaves the implementation to the developer.
If you are looking for a simpler way to use JWT, we highly recommend that you take a look to this library!
