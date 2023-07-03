import Menu from "./Menu";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

// Menu.map((name,category,description) => <>{item}</>)

export default function Sample() {
  return (
    <>
      {Menu.map((item) => 
        {const { id, type, category, description } = item;
        <Card className="max-w-[24rem] overflow-hidden mx-[1rem]" key={id}>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">{type}</Typography>
            <Typography variant="lead" color="gray" className="mt-3 font-normal">
              {description}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <Typography className="font-normal">{category}</Typography>
          </CardFooter>
        </Card>
      }</>
  )
};