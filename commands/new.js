module.exports = {
    name: 'new',
    description: 'Run this command to find out what to do next.',
    testOnly: false,
    autoUpdate: false,

    callback: async (interaction) => {
        // Executes when the command is run
        return 'Test....';
    }
}