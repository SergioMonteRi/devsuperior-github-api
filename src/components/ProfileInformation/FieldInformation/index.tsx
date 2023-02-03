import "./styles.css";

type Props = {
  informationType: string;
  informationContent: string;
};

const FieldInformation = (props: Props) => {
  return (
    <div className="field-information-container">
      <h4>{props.informationType}: {props.informationContent}</h4>
    </div>
  );
};

export default FieldInformation;
