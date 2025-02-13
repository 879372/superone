import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

import { useState } from "react"

const infoMenu = {
    alldepartments: [
        "Todos os departamentos",
        "Saúde e bem estar",
        "Estilo",
        "Vestuário",
        "Calçados",
        "Bijuterias e Acessórios",
        "Moda praia",
        "Roupas esportivas",
        "Acessórios de luxo",
        "Nutrição",
        "Cuidados pessoais",
        "Esportes e aventura",
        "Suplementos",
        "Bem-estar",
        "Atividade física",
        "Eletrônicos",
        "Casa e Decoração",
        "Brinquedos e Jogos",
        "Automotivo"
    ],
    departments: [
        {
            categories: "Saúde e bem estar",
            subcategories: [
                "Nutrição",
                "Cuidados pessoais",
                "Esportes e aventura",
                "Suplementos",
                "Bem-estar",
                "Atividade física"
            ]
        },
        {
            categories: "Estilo",
            subcategories: [
                "Vestuário",
                "Calçados",
                "Bijuterias e Acessórios",
                "Moda praia",
                "Roupas esportivas",
                "Acessórios de luxo"
            ]
        },
        {
            categories: "Eletrônicos",
            subcategories: [
                "Celulares e Tablets",
                "Computadores e Acessórios",
                "TVs e Áudio",
                "Eletroportáteis",
                "Games e Consoles"
            ]
        },
        {
            categories: "Casa e Decoração",
            subcategories: [
                "Móveis",
                "Eletrodomésticos",
                "Cozinha e Mesa",
                "Cama, Mesa e Banho",
                "Decoração"
            ]
        },
        {
            categories: "Brinquedos e Jogos",
            subcategories: [
                "Brinquedos Educativos",
                "Jogos de Tabuleiro",
                "Bonecos e Miniaturas",
                "Brinquedos Eletrônicos",
                "Fantoches e Marionetes"
            ]
        },
        {
            categories: "Automotivo",
            subcategories: [
                "Som Automotivo",
                "Peças e Acessórios",
                "Ferramentas",
                "Lubrificantes e Óleos",
                "Segurança Veicular"
            ]
        }
    ]
};



export default function DropdowMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [expandedColumns, setExpandedColumns] = useState<Record<number, boolean>>({});

    const handleShowMore = (index: number) => {
        setExpandedColumns((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className="flex justify-center items-center w-full ">
            <div className="flex justify-center items-center w-[70%]">
                <div className="flex justify-between w-full items-center min-h-[60px]">
                    <div className="flex gap-5 ">
                        <div className="">
                            <Menubar className="w-full">
                                <MenubarMenu>
                                    <MenubarTrigger className="h-full rounded-full px-0 ">
                                        <div
                                            onClick={toggleAccordion}
                                            className="flex items-center gap-2 w-full">
                                            <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 14.9998H21" stroke="#F47920" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 8.5H21" stroke="#F47920" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2 2H21" stroke="#F47920" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="font-semibold">Departamentos</p>
                                            <svg
                                                width="13"
                                                height="7"
                                                viewBox="0 0 13 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`${isOpen ? "transform rotate-180" : ""} transition-transform duration-300`}
                                            >
                                                <path d="M6.57449 4.91758C6.62881 4.83932 6.66561 4.76052 6.72635 4.70361C8.27469 3.24852 9.82653 1.7967 11.3766 0.342704C11.64 0.0959021 11.9478 -0.00424184 12.3117 0.0893351C12.6656 0.180723 12.8888 0.401259 12.9729 0.733429C13.0575 1.06834 12.9396 1.34797 12.6832 1.58766C11.8001 2.41125 10.9205 3.23757 10.0397 4.06335C9.128 4.91758 8.21628 5.77236 7.30398 6.62659C6.77483 7.12183 6.27429 7.12402 5.75097 6.6337C3.95265 4.94932 2.15551 3.26384 0.356023 1.58055C0.170293 1.40707 0.0254464 1.21937 0.00383625 0.964908C-0.0271188 0.592789 0.158027 0.266091 0.499118 0.099732C0.842544 -0.0677214 1.26365 -0.0239424 1.55685 0.228332C1.79806 0.436281 2.02409 0.659552 2.25538 0.876804C3.61974 2.15678 4.98352 3.43731 6.3473 4.71729C6.40278 4.76928 6.46119 4.81798 6.57449 4.91758Z" fill="#F47920" />
                                            </svg>
                                        </div>
                                    </MenubarTrigger>
                                    <MenubarContent className=" overflow-auto max-h-[550px]">
                                        <div className="grid grid-cols-4 w-full px-20 py-10 gap-4 text-lg">
                                            {infoMenu.departments.map((item, index) => (
                                                <ul key={index}>
                                                    <li className="font-semibold">{item.categories}</li>
                                                    {item.subcategories
                                                        .slice(0, expandedColumns[index] ? item.subcategories.length : 3)
                                                        .map((subcategory, subIndex) => (
                                                            <li className="text-[#737373] pl-2 cursor-pointer hover:opacity-80" key={subIndex}>
                                                                {subcategory}
                                                            </li>
                                                        ))}
                                                    {item.subcategories.length > 3 && (
                                                        <button onClick={() => handleShowMore(index)} className="mt-2">
                                                            {expandedColumns[index] ? (
                                                                <span className="flex gap-1 items-center text-sm">
                                                                    Ver menos
                                                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="transform rotate-180 transition-transform duration-300">
                                                                        <path d="M6.57449 4.91758C6.62881 4.83932 6.66561 4.76052 6.72635 4.70361C8.27469 3.24852 9.82653 1.7967 11.3766 0.342704C11.64 0.0959021 11.9478 -0.00424184 12.3117 0.0893351C12.6656 0.180723 12.8888 0.401259 12.9729 0.733429C13.0575 1.06834 12.9396 1.34797 12.6832 1.58766C11.8001 2.41125 10.9205 3.23757 10.0397 4.06335C9.128 4.91758 8.21628 5.77236 7.30398 6.62659C6.77483 7.12183 6.27429 7.12402 5.75097 6.6337C3.95265 4.94932 2.15551 3.26384 0.356023 1.58055C0.170293 1.40707 0.0254464 1.21937 0.00383625 0.964908C-0.0271188 0.592789 0.158027 0.266091 0.499118 0.099732C0.842544 -0.0677214 1.26365 -0.0239424 1.55685 0.228332C1.79806 0.436281 2.02409 0.659552 2.25538 0.876804C3.61974 2.15678 4.98352 3.43731 6.3473 4.71729C6.40278 4.76928 6.46119 4.81798 6.57449 4.91758Z" fill="#F47920" />
                                                                    </svg>
                                                                </span>
                                                            ) : (
                                                                <span className="flex gap-1 items-center text-sm">
                                                                    Ver mais
                                                                    <svg width="13" height="7" viewBox="0 0 13 7" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="transition-transform duration-300">
                                                                        <path d="M6.57449 4.91758C6.62881 4.83932 6.66561 4.76052 6.72635 4.70361C8.27469 3.24852 9.82653 1.7967 11.3766 0.342704C11.64 0.0959021 11.9478 -0.00424184 12.3117 0.0893351C12.6656 0.180723 12.8888 0.401259 12.9729 0.733429C13.0575 1.06834 12.9396 1.34797 12.6832 1.58766C11.8001 2.41125 10.9205 3.23757 10.0397 4.06335C9.128 4.91758 8.21628 5.77236 7.30398 6.62659C6.77483 7.12183 6.27429 7.12402 5.75097 6.6337C3.95265 4.94932 2.15551 3.26384 0.356023 1.58055C0.170293 1.40707 0.0254464 1.21937 0.00383625 0.964908C-0.0271188 0.592789 0.158027 0.266091 0.499118 0.099732C0.842544 -0.0677214 1.26365 -0.0239424 1.55685 0.228332C1.79806 0.436281 2.02409 0.659552 2.25538 0.876804C3.61974 2.15678 4.98352 3.43731 6.3473 4.71729C6.40278 4.76928 6.46119 4.81798 6.57449 4.91758Z" fill="#F47920" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </button>
                                                    )}
                                                </ul>
                                            ))}
                                        </div>
                                        <div className="bg=[#FAF7F4] h-[218px] p-[40px]">

                                        </div>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>

                        </div>
                        <span className="h-6 w-[1px] bg-[#ABABAB]"></span>
                        <div>
                            <p>Descontos Cliente Unimed Natal</p>
                        </div>
                    </div>
                    <div>
                        <p>Vendas no uniclub</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
