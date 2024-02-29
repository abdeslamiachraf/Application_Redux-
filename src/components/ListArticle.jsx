import React, { useState } from 'react';

export default function ListArticle() {
    const [id, setId] = useState('');
    const [designation, setDesignation] = useState('');
    const [prix, setPrix] = useState('');
    const [articles, setArticles] = useState([
        {
            id: 1,
            designation: "article 1",
            prix: 340
        },
        {
            id: 2,
            designation: "article 2",
            prix: 340
        },
        {
            id: 3,
            designation: "article 3",
            prix: 340
        },
        {
            id: 4,
            designation: "article 4",
            prix: 340
        }
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        const newArticle = {
            id: id,
            designation: designation,
            prix: prix
        };
        setArticles([...articles, newArticle]);
        setId('');
        setDesignation('');
        setPrix('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="">id</label></td>
                            <td><input type="text" value={id} onChange={(e) => setId(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">designation</label></td>
                            <td><input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">prix</label></td>
                            <td><input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Ajouter" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <h1>List Article</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>{article.id} | {article.designation} | {article.prix}</li>
                ))}
            </ul>
        </div>
    );
}
