define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
			this.view.preShow = () => {
				this.view.flxOptions.removeAll();
				this.options.data.forEach((option, index) => {
					const dropdownOption = new com.hcl.toystoreadmin.DropdownOption({
						id: `option${index}`
					}, {}, {});
					dropdownOption.selected = !!option.selected;
					dropdownOption.option = option.option;
					dropdownOption.parentId = this.view.id;
					this.view.flxOptions.add(dropdownOption);
				});
				
				this.view.flxIcon.onClick = () => {
					this.view.flxOptions.isVisible = !this.view.flxOptions.isVisible;
				};
			};
			
			mEventManager.subscribe(appData.EVENT_OPTION_SELECTED, ({id, parentId, option}) => {
				if(this.view.id === parentId){
					this.view.lblSelection.text = option;
					this.view.flxOptions.widgets().forEach((widget) => {
						if(widget.setSelected){
							widget.setSelected(id === widget.id);
						}
					});
					this.view.flxOptions.isVisible = false;
					this.onOptionSelected(option);
				}
			});
			
			this.view.flxOptions.onHover = (widget, context) => {
				if(context.eventType === 'leave'){
					this.view.flxOptions.isVisible = false;
				}
			};
			
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
      defineGetter(this, 'options', () => {
        return this._options;
      });
      defineSetter(this, 'options', value => {
        this._options = value;
      });
    },
		
		onOptionSelected(){}
	};
});