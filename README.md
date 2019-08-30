# Tabbouleh sample with AJV validator

Basic sample which combine [tabbouleh](https://github.com/Chnapy/tabbouleh) (JSON Schema generation) with [react-jsonschema-form](https://github.com/mozilla-services/react-jsonschema-form) (form generation).

[**__Preview here__**](https://chnapy.github.io/tabbouleh-sample-rjsf)

# Getting started

```
npm install
```

```
npm start
```

# How it works

Simplified steps:

```typescript
// generate the UserData schema
const schema = Tabbouleh.generateJSONSchema(UserData);


```