/**
 * Created by sohaib on 3/26/16.
 */
(function () {
    var coreShapeModel=Backbone.Model.extend({});
    var coreShapeView=Backbone.View.extend({
        tagName:'div',
        className:'shape',
        events:{
          'click':'move'
        },

        render:function () {
            this.setDimensions();
            this.setPositions();
            this.setColor();
            return this;
        },

        setDimensions:function () {
            console.log("$el ",this.$el);
         this.$el.css({
             width:this.model.get('width')+"px",
             height:this.model.get('height')+"px"
         })
        },

        setPositions:function () {
            this.$el.css({
                left:this.model.get('positions').x +"px",
                top:this.model.get('positions').y+"px"
            })
        },
        setColor:function () {
            this.$el.css({
                backgroundColor:this.model.get('color')
            })
        },
        move:function () {

           this.$el.css('left',this.model.get('positions').x + 10 +"px")
            console.log(this.$el.position())
        }

    });

    var shapeObject=new coreShapeModel({
       width:50,
       height:50 ,
       color:'red',
        positions:{
            x:20,
            y:10,
        }

    });

    var shapeView=new coreShapeView({model:shapeObject});
    $('div#canvas').append(shapeView.render().el);
    console.log("Model ",coreShapeModel);
    console.log("View ",shapeView);


})();