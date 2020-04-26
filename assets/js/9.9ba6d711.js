(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{334:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"json-web-tokens-jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-web-tokens-jwt"}},[t._v("#")]),t._v(" JSON Web Tokens (JWT)")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#jwt-101"}},[t._v("JWT 101")])]),a("li",[a("a",{attrs:{href:"#examples"}},[t._v("Examples")]),a("ul",[a("li",[a("a",{attrs:{href:"#user-authentication"}},[t._v("User authentication")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"jwt-101"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-101"}},[t._v("#")]),t._v(" JWT 101")]),t._v(" "),a("p",[t._v("JSON Web Tokens are described in the "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC7519"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.\nThe claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.")])]),t._v(" "),a("p",[t._v("Guardian is dealing with "),a("strong",[t._v("signed JWT")]),t._v(" commonly called "),a("strong",[t._v("JWS")]),t._v(".")]),t._v(" "),a("p",[t._v("JWS are particularly suitable when we want to transfer unencrypted but cryptographically unalterable data.\nFor example, it can be a user id that we want to authenticate.\nSince the data are unalterable, when the user come back with JWT, we can simply verify the token signature.")]),t._v(" "),a("p",[t._v("The JWS consists of three distinct parts.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Header")]),t._v(" "),a("td",[t._v("Metadata about the JWS, such as the used algorithm.")])]),t._v(" "),a("tr",[a("td",[t._v("Payload")]),t._v(" "),a("td",[t._v("The actual piece of information held by the token.")])]),t._v(" "),a("tr",[a("td",[t._v("Signature")]),t._v(" "),a("td",[t._v("Unique string generated from a secret key that ensures the integrity of the payload.")])])])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"user-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-authentication"}},[t._v("#")]),t._v(" User authentication")]),t._v(" "),a("p",[t._v("Consider an application where the users are identified by their ids.\nThe user table might look like this:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("username")]),t._v(" "),a("th",[t._v("password  (hashed)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("mathieu")]),t._v(" "),a("td",[t._v("$tr0gha$h")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("valentin")]),t._v(" "),a("td",[t._v("1lov€k8s")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("dimitri")]),t._v(" "),a("td",[t._v("1mor$ay$")])])])]),t._v(" "),a("p",[t._v("If you want to use the JWTs, you will probably want to put the user id into the token payload, which allows you to simply check to token integrity and get the user id.")]),t._v(" "),a("p",[t._v("JWT payloads are key-value piece of data called "),a("strong",[t._v("claims")]),t._v(".\nThe standard claims are described in the "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519#section-4.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC7519, Section 4.1"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("In this example, we will put the user id inside the "),a("code",[t._v("sub")]),t._v(" claim, as recommended by the "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519#section-4.1.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC7519, Section 4.1.2"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("blockquote",[a("h4",{attrs:{id:"_4-1-2-sub-subject-claim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-sub-subject-claim"}},[t._v("#")]),t._v(' 4.1.2.  "sub" (Subject) Claim')]),t._v(" "),a("p",[t._v('The "sub" (subject) claim identifies the principal that is the subject of the JWT.')])]),t._v(" "),a("p",[t._v("This an example of an unserialized JWT:")]),t._v(" "),a("h4",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" Payload")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "sub": "1"\n}\n')])])]),a("h4",{attrs:{id:"signature-using-the-key-guardian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-using-the-key-guardian"}},[t._v("#")]),t._v(" Signature, using the key "),a("code",[t._v("guardian")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("f9GAvQZnFohqZk2JOTRFEeGizsKNcPzKB8om521EHZ8\n")])])]),a("p",[t._v("The signature, using the application JWT key, ensures that the "),a("code",[t._v("sub")]),t._v(" claim cannot be modified by an attacker.\nThe token can now be serialized using the following algorithm:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('base64url(header) || "." || base64url(payload) || "." || signature\n')])])]),a("p",[t._v("where "),a("code",[t._v("header")]),t._v(" and "),a("code",[t._v("payload")]),t._v(" are the JSON representations string of the header and the payload, and "),a("code",[t._v("||")]),t._v(" the concatenation operator.")]),t._v(" "),a("p",[t._v("Serializing the previous token gives the following result:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIn0.f9GAvQZnFohqZk2JOTRFEeGizsKNcPzKB8om521EHZ8\n")])])]),a("p",[t._v("You can check the validity of this token on the "),a("a",{attrs:{href:"https://jwt.io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIn0.f9GAvQZnFohqZk2JOTRFEeGizsKNcPzKB8om521EHZ8",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt.io's debugger"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);