import PageTitle from "../components/PageTitle";
import ConverterView from "../views/ConverterView";

export default function ConverterPage() {
  return (
    <div>
      <PageTitle title={`Convert currencies`} />
      <ConverterView />
    </div>
  );
}
