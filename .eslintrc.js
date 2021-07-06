module.exports = {
    "env": {
        "browser": true, //브라우저
        "node": true,  //req
        "es2021": true //es12 최신버전 허용
    },
    "extends": ["eslint:recommended"], // 일단 eslint 추천하는 방식으로 할것.
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
    },
    "rules": {
        "no-unexpected-multiline": "error",
        "no-extra-semi": "error",
    }
};
