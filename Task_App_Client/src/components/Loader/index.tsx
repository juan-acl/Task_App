import React from 'react';
import { connect } from 'react-redux';
import { BarIndicator } from 'react-native-indicators';
import { State, LoaderProps } from '../../interfaces/loader.type';

const Loader: React.FC<LoaderProps> = (props: LoaderProps) => props.isLoading && <BarIndicator color='#00A680' size={30} />


const mapStateToProps = (state: State) => ({
    isLoading: state.loader.isLoading
})

export default connect (mapStateToProps)(Loader);