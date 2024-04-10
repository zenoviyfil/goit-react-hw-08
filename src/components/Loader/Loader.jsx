import { DNA } from "react-loader-spinner";

export default function Loader() {
  return (
    <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
  );
}