import React from 'react';
import { connect } from 'react-redux';
import { BarIndicator } from 'react-native-indicators';

interface Props {
    isLoading: boolean;
}

interface State {
    loader: {
        isLoading: boolean;
    };
}

const Loader: React.FC<Props> = (props: Props) => props.isLoading && <BarIndicator color='#00A680' size={30} />


const mapStateToProps = (state: State) => ({
    isLoading: state.loader.isLoading
})

export default connect (mapStateToProps)(Loader);