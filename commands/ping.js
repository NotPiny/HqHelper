module.exports = {
    name: 'ping',
    description: 'Pong!',
    testOnly: false,
    autoUpdate: false,

    callback: async (interaction) => {
        // Executes when the command is run
        interaction.reply('Pong!');
    }
}