var couchbase = require('couchbase')
var express = require('express')

async function getConnection() {
  const clusterConnStr = 'couchbases://cb.yga4uvxvnpa8pijg.cloud.couchbase.com'

  const username = 'Administrator'
  const password = 'Password@123!'
  const bucketName = 'Save_Water'

  const cluster = await couchbase.connect(clusterConnStr, {
    username: username,
    password: password,
    timeouts: {
      kvTimeout: 10000, // milliseconds
    },
  })

  const bucket = cluster.bucket(bucketName)
  return bucket;
}

function rating(user_rating,name){
  /*
  * Get User Rating
  * Generate Unique Key
  * Insert Key, Name and Rating Into Database
  */
  return outcome;
}

async function api_parsing(info_request){
  // Call The Database and get User Request
  let bucket = await getConnection();
  const document = await bucket.scope("content").collection("information_article").get(info_request)
  return document;
}

// Run the main function
module.exports = {
    api_parsing
  }