const {testArtilleryLogin} =require( './commands/login_artillery');

async function artilleryLoginScript(page: any) {
    await testArtilleryLogin(page);

}

module.exports = {artilleryLoginScript};