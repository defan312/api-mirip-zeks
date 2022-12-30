const fs = require('fs')

global.creator = 'ᴹᴿ᭄defα͢͢͢ή፝֟͜* ×፝֟͜×' 
global.apikey = ["ᴹᴿ᭄defα͢͢͢ή፝֟͜* ×፝֟͜×", "ᴬᴺᴵᴬ ᴮᴼᵀ", "ᴬᴺᴵᴬ ᴮᴼᵀ"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
