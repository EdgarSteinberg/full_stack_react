import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';


const ProductForm = ({ handleSubmit, handleChange, handleCategoryChange, selectedCategory, form, categories }) => {


    return (
        <>
            <Form onSubmit={handleSubmit} encType="multipart/form-data" style={{ padding: '20px' }}>
                <div className="row">
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="price"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="code">
                            <Form.Label>Código</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="code"
                                name="code"
                                value={form.code}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="category_product">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="category_product"
                                name="category_product"
                                value={form.category_product}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="stock"
                                name="stock"
                                value={form.stock}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="category">
                            <Form.Label>Categoría de Producto</Form.Label>
                            <Form.Control
                                as="select"
                                name="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                required
                            >
                                <option value="">Seleccione una categoría</option>
                                {categories.map(category => (
                                    <option key={category._id} value={category._id}>
                                        {category.category_name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </div>

                    <div className="col-6">
                        <Form.Group className="mb-3" controlId="thumbnail">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                type="file"
                                name="thumbnail"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <Button variant="success" type="submit">
                    Crear Producto
                </Button>
            </Form>

        </>
    )
}

export default ProductForm;