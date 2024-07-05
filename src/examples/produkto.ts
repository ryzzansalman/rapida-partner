import type { IProject } from "../interfaces/project.interface";
import { productForm } from "./product.form";
import { productList } from "./product.list";

export const produkto: IProject = {
    id: "produkto",
    description: "Base de cadastro de produtos em geral para servir de apoio para sistemas de e-commerce e marketplace, noarmalizando assim as informações.",
    title: "Produkto",
    backend: {
        framework: "nest",
        database: "mongodb"
    },
    frontend: {
        framework: "angular",
        uiKit: "material"
    },
    forms: [productForm],
    lists: [productList]
}