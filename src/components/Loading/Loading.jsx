import { Vortex } from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#0E9EEF', '#EE10B0', '#0E9EEF', '#EE10B0', '#0E9EEF', '#EE10B0']}
      />
    </div>
  );
};

export default Loading;