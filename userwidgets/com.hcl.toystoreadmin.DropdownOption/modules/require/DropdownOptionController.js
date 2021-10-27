define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				this.view.skin = this.view.flxSelected.isVisible ? 'sknFlxHover' : 'slFbox';
			};
			
			this.view.onClick = () => {
				mEventManager.publish(appData.EVENT_OPTION_SELECTED, {
					id: this.view.id,
					parentId: this.parentId,
					option: this.view.lblOption.text
				});
			};
			
			
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'parentId', () => {
        return this._parentId;
      });
      defineSetter(this, 'parentId', value => {
        this._parentId = value;
      });
    },
		
		setSelected(state) {
			this.view.flxSelected.isVisible = state;
			this.view.skin = state ? 'sknFlxHover' : 'slFbox';
		}
	};
});