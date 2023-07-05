import CardReader from "./CardReader";
// import Sample from "./sample";
export default function Home() {
    return (
        <>
            <div className="my-4 text-3xl text-center" id="product">Products</div>
            <div className="pb-[2rem] grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <CardReader />
            </div>
        </>
    );
}