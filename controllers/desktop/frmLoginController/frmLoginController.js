define({ 
	SKIN_ACTIVE: 'sknBtnActive',
	SKIN_INACTIVE: 'sknBtnInactive',
	SKIN_HOVER: 'sknBtnHover',

	onViewCreated(){
		
		this.view.init = () => {
			this.view.txtUsername.onTextChange = () => {
				this.setFlxLoginSkin();
			};
			
			this.view.txtPassword.onTextChange = () => {
				this.setFlxLoginSkin();
			};
			
			this.view.flxLogin.onClick = () => {
				if(this.view.txtUsername.text && this.view.txtPassword.text){
					voltmx.store.setItem('USERNAME', this.view.txtUsername.text);
					new voltmx.mvc.Navigation('frmReports').navigate();
				}
			};
			
			this.view.flxLogin.onHover = (widget, context) => {
				if(context.eventType === 'enter' && this.view.flxLogin.skin === this.SKIN_ACTIVE){
					this.view.flxLogin.skin = this.SKIN_HOVER;
				} else if(context.eventType === 'leave' && this.view.flxLogin.skin === this.SKIN_HOVER){
					this.view.flxLogin.skin = this.SKIN_ACTIVE;
				}
			};
		};
		
		this.view.postShow = () => {
			this.view.txtUsername.text = voltmx.store.getItem('USERNAME') || '';
			this.view.txtPassword.text = '';
			this.setFlxLoginSkin();
		};
		
	},
	
	setFlxLoginSkin() {
		this.view.flxLogin.skin = (this.view.txtUsername.text && this.view.txtPassword.text) ? this.SKIN_ACTIVE : this.SKIN_INACTIVE;
	}

});