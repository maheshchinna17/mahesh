define([],function(){function e(e){this.id=e}return e.prototype={setModel:function(e){this.model=e},render:function(e){e.prepend("<h1>Controller new "+this.id+' says "'+this.model.getTitle()+'"</h1>')}},e});