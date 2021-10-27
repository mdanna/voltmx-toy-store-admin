define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			
			this.view.preShow = () => {
				this.view.flxAction.isVisible = !!this.view.lblAction.text;
				this.view.flxNum.isVisible = !!this.view.lblAction.text; // this is not a bug !
				this.view.lblPerc.skin = this.view.lblPerc.text.startsWith('+') ? 'sknGreen100' : 'sknRed100';
				this.view.lblAction.skin = this.view.lblAction.text === 'Keep Location' ? 'sknGreen100' : 'sknRed100';
				this.view.lblWhenWhere.skin = this.view.lblWhenWhere.text.startsWith('to') ? 'sknRed100' : 'sknLightGrey100';
			};
			
			this.view.flxProduct.onHover = (widget, context) => {
				if(this.hoverEnabled === 'yes'){
					if(context.eventType === 'enter') {
						if(this.view.flxProduct.skin !== 'sknFlxSelected'){
							this.view.flxProduct.skin = 'sknFlxHover';
						}
					} else if(context.eventType === 'leave'){
						if(this.view.flxProduct.skin !== 'sknFlxSelected'){
							this.view.flxProduct.skin = 'slFbox';
						}
					} 
				}
			};
			
			this.view.flxProduct.onClick = () => {
				mEventManager.publish(appData.EVENT_PRODUCT_SELECTION, this.view.lblNum.text);
			};
			
			mEventManager.subscribe(appData.EVENT_PRODUCT_SELECTION, (index) => {
				if(this.hoverEnabled === 'yes'){
					if(index === this.view.lblNum.text){
						this.view.flxProduct.skin = 'sknFlxSelected';
					} else {
						this.view.flxProduct.skin = 'slFbox';
					}
				}
			});
			
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'hoverEnabled', () => {
        return this._hoverEnabled;
      });
      defineSetter(this, 'hoverEnabled', value => {
        this._hoverEnabled = value;
      });
    }
	};
});