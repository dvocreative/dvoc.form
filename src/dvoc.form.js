(function(GB){

    var Form = GB.getMethod('component').createClass({

        render : function() {

            return GB.getMethod('component').createElement(
                'form',
                {
                    onSubmit : this._onSubmit
                },
                this.props.children
            );

        },

        _onSubmit : function(e) {
            if (this.props.onSubmit) {
                e.preventDefault();
                this.props.onSubmit(e.target);
            }
        }

    });

    GB.addResource('dvoc', 'Form', Form);

})(Gumball);