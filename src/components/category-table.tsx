import React from "react";

type Product = {
    name: string;
    color: string;
    category: string;
    price: string;
    stock: number;
};

const products: Product[] = [
    {
        name: 'Apple MacBook Pro 17"',
        color: "Silver",
        category: "Laptop",
        price: "$2999",
        stock: 231,
    },
    {
        name: "Microsoft Surface Pro",
        color: "White",
        category: "Laptop PC",
        price: "$1999",
        stock: 423,
    },
    {
        name: "Magic Mouse 2",
        color: "Black",
        category: "Accessories",
        price: "$99",
        stock: 121,
    },
];

const CategoryTable: React.FC = () => {
    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-blue-950 border-b rounded-base text-white">
                    <tr>
                        <th className="px-6 py-3 font-medium">Category name</th>
                        <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((item, index) => (
                        <tr
                            key={index}
                            className="bg-blue-950 border-b border-default last:border-none text-white"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                            >
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        className="
                                            px-3 py-1 bg-blue-800 text-white 
                                            rounded font-medium cursor-pointer self-end
                                        "
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="
                                            px-3 py-1 bg-red-800 text-white 
                                            rounded font-medium cursor-pointer self-end
                                        "
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryTable;
