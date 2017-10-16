var twitchChannel = process.argv[2];
console.log(twitchChannel);
const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder()
    .forBrowser('chrome')
    .build();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

driver.get('https://www.twitch.tv/');

driver.manage().addCookie({
	domain: '.twitch.tv',
    expiry: 1522613904.412605,
    httpOnly: false,
    name: 'api_token',
    path: '/',
    secure: true,
    value: 'bbc6118fcd8a38ac6adca6a7c4c1119f' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    httpOnly: true,
    name: 'csrf_token',
    path: '/',
    secure: true,
    value: 'TWiGqYD%2FEXLAJAE3JKpHAS4r8%2BJ9O7VhylwqgIm2bvw%3D' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1823631502.9226,
    httpOnly: false,
    name: 'unique_id',
    path: '/',
    secure: false,
    value: 'b4b1af3e0776a5e8' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1508102303.3026,
    httpOnly: true,
    name: 'passport',
    path: '/',
    secure: true,
    value: 'MTUwODA5ODcwMHxlMzBLfDKlO6TSgv1_-nZCBdepsOKkWw_Ikqa3Y52XVhmjuNDY' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1522613904.412599,
    httpOnly: true,
    name: 'persistent',
    path: '/',
    secure: true,
    value: '146969036%3A%3Ab0tom8fdtixvbfw8655qag5d0iogjq' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1522613904.412604,
    httpOnly: false,
    name: 'last_login',
    path: '/',
    secure: false,
    value: '2017-10-15T20:18:21Z' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1508102304.4126,
    httpOnly: true,
    name: 'sudo',
    path: '/',
    secure: true,
    value: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDY5NjkwMzYiLCJhdWQiOlsic3VkbyJdLCJleHAiOjE1MDgxMDIzMDEsImlhdCI6MTUwODA5ODcwMX0=.VhmqWeUfBpzZkQaxlEmODi4jYyLGWRePHGyReAMu5uNy0xAel13p67-APfz7DwgROgbWvgsor2fb9QR1Id5pQA==' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1508703504.412601,
    httpOnly: true,
    name: 'bits_sudo',
    path: '/',
    secure: true,
    value: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDY5NjkwMzYiLCJhdWQiOlsic3VkbyIsImJpdHMiXSwiZXhwIjoxNTA4NzAzNTAxLCJpYXQiOjE1MDgwOTg3MDF9.YoDY9Xz9aD-dInDxNdcLLIRql8Oj_hR8JpIrarlWkCef7lt_pr10fBS05ctIcSAZyRcvMsf_bJOG5isoHXG6kg==' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1523650704.412606,
    httpOnly: true,
    name: 'device_cookie',
    path: '/',
    secure: true,
    value: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Bhc3Nwb3J0LnR3aXRjaC50diIsInN1YiI6InRoZW5ld2d1eTE3NiIsImF1ZCI6ImJydXRlLWZvcmNlLXByb3RlY3Rpb24iLCJleHAiOjE1MjM2NTA3MDEsImlhdCI6MTUwODA5ODcwMSwibm9uY2UiOiJaQXpsVkpJWlpKVHZFUnFHMnd0djN1WC1TRWJ0NnBhNTZSN1pKdm9GTGJJPSJ9.2ZuTqRyufnsAqXtvXpOgqbI2EyQ2ZbHBssNApD5LNBJmIMdvWROldLrO_JOHSCSaOXjb-UIgvo4tUpONNo8W_Q%3D%3D' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 2177452802.444599,
    httpOnly: false,
    name: 'twilight_beta_id',
    path: '/',
    secure: false,
    value: '2660165275' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1539634705,
    httpOnly: false,
    name: 'mp_809576468572134f909dffa6bd0dcfcf_mixpanel',
    path: '/',
    secure: false,
    value: '%7B%22distinct_id%22%3A%20%2215f21b0082d6f9-06392ddf42e76d-c303767-1fa400-15f21b0082e5e1%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fpassport.twitch.tv%2Fsessions%2Fnew%3Fclient_id%3D36926892495301a63b2e9350a38d3d6dbf72ad81e571a3ebba4687250ec8f352c70b3e91229602f73e1335528f3caa00a5cf513f484d7003784e722f2ce7a216%26embed%3D0%26error_code%3D%26redirect_path%3Dhttps%253A%252F%252Fwww.twitch.tv%252F%26style%3D%26sudo_reason%3D%26username%3D%22%2C%22%24initial_referring_domain%22%3A%20%22passport.twitch.tv%22%7D' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1823458706,
    httpOnly: false,
    name: 'language',
    path: '/',
    secure: false,
    value: 'en' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1509308306,
    httpOnly: false,
    name: 'login',
    path: '/',
    secure: false,
    value: 'thenewguy176' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1509308306,
    httpOnly: false,
    name: 'name',
    path: '/',
    secure: false,
    value: 'thenewguy176' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1571170708,
    httpOnly: false,
    name: '__utma',
    path: '/',
    secure: false,
    value: '165406266.971057128.1508098708.1508098708.1508098708.1' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    httpOnly: false,
    name: 'session_unique_id',
    path: '/',
    secure: false,
    value: 'c074a947f16ce879' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1508100508,
    httpOnly: false,
    name: '__utmb',
    path: '/',
    secure: false,
    value: '165406266.0.10.1508098708' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    httpOnly: false,
    name: '__utmc',
    path: '/',
    secure: false,
    value: '165406266' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1523866708,
    httpOnly: false,
    name: '__utmz',
    path: '/',
    secure: false,
    value: '165406266.1508098708.1.1.utmcsr=passport.twitch.tv|utmccn=(referral)|utmcmd=referral|utmcct=/sessions/new' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1571170705,
    httpOnly: false,
    name: '__gads',
    path: '/',
    secure: false,
    value: 'ID=49aa7724dc234bcd:T=1508098705:S=ALNI_MbCo734wthVlSkT1t_60bsHcSPNMQ' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1541967508,
    httpOnly: false,
    name: '__qca',
    path: '/',
    secure: false,
    value: 'P0-520846804-1508098708899' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    httpOnly: false,
    name: 'bknx_fa',
    path: '/',
    secure: false,
    value: '1508098711199' });
driver.manage().addCookie({
  domain: '.twitch.tv',
    expiry: 1508105911,
    httpOnly: false,
    name: 'bknx_ss',
    path: '/',
    secure: false,
    value: '1508098711199' });

driver.navigate().to('https://www.twitch.tv/'+ twitchChannel);

sleep(5000);
driver.sleep(5000);


//driver.findElement(By.xpath('//*[@id="js-controls-bottom"]/div/div[2]/button[2]')).click();
driver.findElement(By.xpath('//*[@id="js-controls-bottom"]/div/div[2]/div[2]/button')).click();

sleep(10000);
driver.sleep(10000);

driver.getAllWindowHandles().then(function (handles){
console.log(handles);
});

var handlePromise = driver.getAllWindowHandles();
handlePromise.then(function (handles){
  var popUpWindow = handles[1];

  driver.switchTo().window(popUpWindow);
})

driver.findElement(By.xpath('/html/body/div[2]/div[1]/div/div[3]/div/span[2]/div/div[2]/div/span/div/div[2]/div[1]/textarea')).sendKeys('DateTime');
driver.findElement(By.xpath('/html/body/div[2]/div[1]/div/div[3]/div/span[2]/div/div[2]/div/span/div/div[2]/div[2]/div[2]/div/button')).click();

sleep(10000);
driver.sleep(10000);

driver.quit();

/*


driver.manage().getCookies().then(function (cookies) {
    console.log(cookies);
}); 

driver.getSession().then(function(session){
    sessionId = session.id_; //need for API calls
    console.log('Session ID: ', sessionId); 
    console.log('See your test run at: https://app.crossbrowsertesting.com/selenium/' + sessionId)
});



driver.get('http://www.newschoolers.com');

driver.manage().addCookie({
	domain: 'www.newschoolers.com',
    expiry: 1508118363,
    httpOnly: false,
    name: 'omnitureUserIdTracker',
    path: '/',
    secure: false,
    value: '20171015194103972733' });
driver.manage().addCookie({
	domain: '.newschoolers.com',
    expiry: 1508096524,
    httpOnly: false,
    name: '_gat_clientTracker',
    path: '/',
    secure: false,
    value: '1' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1924923600,
    httpOnly: false,
    name: 'pl_uuid',
    path: '/',
    secure: false,
    value: '12d2330f' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1539632463.019352,
    httpOnly: true,
    name: '__cfduid',
    path: '/',
    secure: false,
    value: 'd23e2429957846b56f812cf5335bcf0f01508096460' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    httpOnly: false,
    name: 'omnitureLandingPageTracker',
    path: '/',
    secure: false,
    value: 'Other' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1508126399,
    httpOnly: false,
    name: 'bm_daily_unique',
    path: '/',
    secure: false,
    value: 'true' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1508701264,
    httpOnly: false,
    name: 'bm_weekly_unique',
    path: '/',
    secure: false,
    value: 'true' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1509508799,
    httpOnly: false,
    name: 'bm_monthly_unique',
    path: '/',
    secure: false,
    value: 'true' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1508118363,
    httpOnly: false,
    name: 'omnitureUserIdTracker',
    path: '/',
    secure: false,
    value: '20171015194103972733' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1541965264,
    httpOnly: false,
    name: '__qca',
    path: '/',
    secure: false,
    value: 'P0-1508926471-1508096464385' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1602704468,
    httpOnly: false,
    name: 's_lv',
    path: '/',
    secure: false,
    value: '1508096468495' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1508126399,
    httpOnly: false,
    name: 'bm_sample_frequency',
    path: '/',
    secure: false,
    value: '100' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1571168468,
    httpOnly: false,
    name: 's_fid',
    path: '/',
    secure: false,
    value: '37C4A69EC3B8480E-2B516DF703470DD4'});
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1571168468,
    httpOnly: false,
    name: '_ga',
    path: '/',
    secure: false,
    value: 'GA1.2.789164145.1508096465' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1508096524,
    httpOnly: false,
    name: '_gat',
    path: '/',
    secure: false,
    value: '1' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1571168462,
    httpOnly: false,
    name: '__gads',
    path: '/',
    secure: false,
    value: 'ID=6f1a3fa9daaf127f:T=1508096462:S=ALNI_MadrolCXzQOv2b67fxClHQIV4FU1Q' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1508182868,
    httpOnly: false,
    name: '_gid',
    path: '/',
    secure: false,
    value: 'GA1.2.776337828.1508096465' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    httpOnly: false,
    name: 's_cc',
    path: '/',
    secure: false,
    value: 'true' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1508098268,
    httpOnly: false,
    name: 's_prop9',
    path: '/',
    secure: false,
    value: 'Homepage' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1508098268,
    httpOnly: false,
    name: 's_prop10',
    path: '/',
    secure: false,
    value: 'Homepage' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1508098268,
    httpOnly: false,
    name: 's_lv_s',
    path: '/',
    secure: false,
    value: 'First%20Visit' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    httpOnly: false,
    name: 's_sq',
    path: '/',
    secure: false,
    value: '%5B%5BB%5D%5D' });
driver.manage().addCookie({
  domain: 'www.newschoolers.com',
    expiry: 1924923600,
    httpOnly: false,
    name: 'bm_last_load_status',
    path: '/',
    secure: false,
    value: 'NOT_BLOCKING' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    expiry: 1539632472.355379,
    httpOnly: false,
    name: 'PHPSESSID',
    path: '/',
    secure: false,
    value: 'pursmvi087l0gpapobpacvkp46' });
driver.manage().addCookie({
  domain: '.newschoolers.com',
    httpOnly: false,
    name: 's_ppv',
    path: '/',
    secure: false,
    value: '-%2C29%2C29%2C888' })

driver.navigate().to('http://www.newschoolers.com/forum/2/Non-Ski-Gabber');

*/