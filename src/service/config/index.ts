export const TIME_OUT = 50000

let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else {
  BASE_URL = 'http://codercba.prod:9002'
}

export { BASE_URL }
