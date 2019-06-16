// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

const title = [
    {
        name: 'pre',
        tip: ''
    },
    {
        name: 'p',
        tip: '正文'
    },
    {
        name: 'h1',
        tip: '副标题一'
    },
    {
        name: 'h2',
        tip: '副标题二'
    },
];
window.tinymce.PluginManager.add('stylebuttons', function (editor) {
    title.forEach(function (item) {
        editor.addButton("style-" + item.name, {
            tooltip: item.tip,
            text: item.name.toUpperCase(),
            onClick: function () { editor.execCommand('mceToggleFormat', false, item.name); },
            onPostRender: function () {
                var self = this, setup = function () {
                    editor.formatter.formatChanged(item.name, function (state) {
                        self.active(state);
                    });
                };
                editor.formatter ? setup() : editor.on('init', setup);
            }
        })
    });
});
// window.tinymce.PluginManager.add('stylebuttons', function (editor) {
//     ['pre', 'p', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (name) {
//         editor.addButton("style-" + name, {
//             tooltip: "Toggle " + name,
//             text: name.toUpperCase(),
//             onClick: function () { editor.execCommand('mceToggleFormat', false, name); },
//             onPostRender: function () {
//                 var self = this, setup = function () {
//                     editor.formatter.formatChanged(name, function (state) {
//                         self.active(state);
//                     });
//                 };
//                 editor.formatter ? setup() : editor.on('init', setup);
//             }
//         })
//     });
// });
const plugins = ['stylebuttons advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount']

export default plugins
