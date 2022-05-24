import ReactLoading from 'react-loading';

const Loading = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 bg-blue-400 opacity-80 flex justify-center items-center'>
            <ReactLoading type='bars' height={'20%'} width={'20%'} />
        </div>)
};

export default Loading;