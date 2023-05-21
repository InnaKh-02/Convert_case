const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('The Convert Case extension is now active!');

    let disposable = vscode.commands.registerCommand('extension.convertCase', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        const convertedText = convertToUpperCase(text); // Змінити на потрібний метод конвертації

        editor.edit((editBuilder) => {
            editBuilder.replace(selection, convertedText);
        });
    });

    context.subscriptions.push(disposable);
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}


function deactivate() {}

module.exports = {
	activate
}
