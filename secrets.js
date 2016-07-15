var secrets = {
  redis: {
    staging: {
      auth_pass: ""
    },
    me: {
      auth_pass: ""
    },
    production: {
      auth_pass: ""
    }
  },
  s3: {
    accessKeyId:     'AKIAJBQ4MYPH2K3RFD7A',
    secretAccessKey: '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',
  },
  rollbar: {
    development: {
      accessToken: '',
    },
    staging: {
      accessToken: '',
    },
    production: {
      accessToken: '',
    },
  },
};

module.exports = secrets;
