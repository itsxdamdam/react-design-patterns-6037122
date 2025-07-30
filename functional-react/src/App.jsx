import { Card, CardBody, CardFooter, CardHeader } from "./composition";
import { DangerButton2, SuccessButton } from "./partialApplication";
import { RecursiveComponent } from "./RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <div>
      <RecursiveComponent data={nestedObject} />
      <Card>
        <CardHeader title="Card 1" />
        <CardBody>
          <p>This is the card content</p>
        </CardBody>
        <CardFooter>
          <p>A footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardBody>
          <p>This is the card content 2</p>
        </CardBody>
      </Card>

      <DangerButton2 text="Self Destruct!" />
      <SuccessButton text="Succcesss!" />
    </div>
  );
}

export default App;
