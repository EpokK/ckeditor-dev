/**
 * Plugin gerant la sauvegarde du message dans brouillon via le raccourci CTRL + S par exemple
 * @author richard
 */
(function()
{
   var savemessage =
   {
      exec : function( editor )
      {
         composer('draft'); // sauvegarde le message en instance de redaction dans la partie Brouillon
      }
   };
   var pluginName = 'savemessage';
   CKEDITOR.plugins.add( pluginName,
   {
      init : function( editor )
      {
         editor.addCommand( pluginName, savemessage );
      }
   });
})();