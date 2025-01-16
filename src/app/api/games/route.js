export const Produtos_Mock = [
    {
        id: 1,
        Jogo: "Red Dead Redemption 2",
        Preco: "R$:35,00",
        versao: "XBOX ONE/SERIES X/S",
    },
    {
        id: 2,
        Jogo: "Death stranding",
        Preco: "R$:25,00",
        versao: "XBOX ONE/SERIES X/S",
    },
    {
        id: 3,
        Jogo: "Dark Souls 3",
        Preco: "R$:25,00",
        versao: "XBOX ONE/SERIES X/S",
    },

    {
        id: 4,
        Jogo: "CyberPunk 2077",
        Preco: "R$:25,00",
        versao: "XBOX ONE/SERIES X/S",
    },
];

// Manipulador da rota
export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(Produtos_Mock);
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
}
