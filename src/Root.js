import React from 'react';
import { connect } from 'react-redux';
import Navigator from './navigation/Modal';
import LangSelect from './screens/LangSelect';

function Root(props) {
	// return props.sLang && props.tLang ? <Navigator /> : <LangSelect />;
	return <Navigator /> ;
}

// function mapStateToProps(state) {
// 	return {
// 		sLang: state.settings.sLang,
// 		tLang: state.settings.tLang
// 	};
// }

export default connect(
	null,
	null
)(Root);
