import styled from 'styled-components';

const Summary = ( props ) => {
    const { shift, scrollInfo } = props;

    const formatShift = () => {
        if(shift < scrollInfo.windowWidth){
            return shift;
        } else {
            return scrollInfo.windowWidth;
        }
    }

    const formatExpand = () => {

        if(shift < scrollInfo.windowWidth){
            return 0;
        }
        else { 
            console.log(scrollInfo.windowHeight)
            // console.log(((scrollInfo.scrollY - (scrollInfo.windowHeight))/scrollInfo.windowHeight))
            return (100*(scrollInfo.scrollY - (scrollInfo.windowHeight))/scrollInfo.windowHeight)
        }
    }
    return (
        <Background shift = {formatShift()}>
            <Transition height = {formatExpand()}/>
        </Background>
    );
}
export default Summary;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: calc( 100vw - ${props => (props.shift)}px);
    width: 100vw;
    height: 100%;
    background: white;
`;


const Transition = styled.div`
    position: absolute;
    width: 100vw;
    height: ${props => props.height}%;
    border: 2px solid black;
    background: black;
    top: calc(50% - ${props => 0.5 * props.height}%);
`;