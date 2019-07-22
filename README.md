How to use Card.io integration + VGS in action.

How to run:
1. `git clone git@github.com:verygoodsecurity/react-native-cardio-demo-app.git`
2. `cd ./react-native-cardio-demo-app` 
3. `npm i`
4. `Open App.js and insert your ValtUrl` [Options for Card.io](https://github.com/verygoodsecurity/react-native-awesome-card-io#methods) 
```
  VGSCardIOModule
    .scanCard({
      ...
    })
    .redactCard({
      vaultUrl: '<HTTPS link to the VGS Vault>',
      path: '/post',
      method: 'POST',
    })
```
5. `Build and run in xcode (Simalators don't allow acces to the camera)`
6. `Set up Route in` [VGS Dashboard](https://dashboard.verygoodsecurity.com)

