const PRODUTOS = [
    {
        "id": 1,
        "slug": "blusa_branca_manga_longa_texturizada",
        "nome": "Blusa Branca Manga Longa Texturizada",
        "categoria": "Partes Superiores",
        "preco": 109.9,
        "precoAnterior": 137.38,
        "descricao": "Blusa branca de manga longa com tecido texturizado e modelagem confortável.",
        "imagens": [
            "blusa_branca_manga_longa_texturizada.jpg",
            "blusa_branca_manga_longa_texturizada2.jpg"
        ],
        "modelo": "blusa_branca_manga_longa_texturizadaGA.jpg",
        "cores": ["Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 42
    },
    {
        "id": 2,
        "slug": "blusa_feminina_preta",
        "nome": "Blusa Preta Ombro a Ombro",
        "categoria": "Partes Superiores",
        "preco": 99.9,
        "precoAnterior": 124.88,
        "descricao": "Blusa feminina preta com modelagem ombro a ombro e caimento ajustado.",
        "imagens": [
            "blusa_feminina_preta.jpg",
            "blusa_feminina_preta_costas.jpg"
        ],
        "modelo": "blusa_preta_feminina_ga.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 38
    },
    {
        "id": 3,
        "slug": "blusa_listrada_preta_cinza",
        "nome": "Blusa Listrada Preta e Cinza",
        "categoria": "Partes Superiores",
        "preco": 119.9,
        "precoAnterior": 149.88,
        "descricao": "Blusa de manga longa com listras pretas e cinzas e modelagem confortável.",
        "imagens": [
            "blusa_listrada_preta_cinza.jpg",
            "blusa_listrada_preta_cinza2.jpg"
        ],
        "modelo": "blusa_listrada_preta_cinzaGA.jpg",
        "cores": ["Preto", "Cinza"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 51
    },
    {
        "id": 4,
        "slug": "blusa_preta_estampada",
        "nome": "Blusa Preta de Manga Longa Estampada",
        "categoria": "Partes Superiores",
        "preco": 119.9,
        "precoAnterior": 149.88,
        "descricao": "Blusa preta de manga longa com estampa gráfica frontal e caimento urbano.",
        "imagens": [
            "blusa_preta_estampada.jpg",
            "blusa_preta_estampa2.jpg"
        ],
        "modelo": "blusa_preta_estampaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 34
    },
    {
        "id": 5,
        "slug": "camiseta_branca_estampa_cruz",
        "nome": "Camiseta Branca Estampa Cruz",
        "categoria": "Partes Superiores",
        "preco": 89.9,
        "precoAnterior": 112.38,
        "descricao": "Camiseta branca em algodão com estampa de cruz frontal e caimento streetwear.",
        "imagens": [
            "camiseta_branca_estampa_cruz.jpg",
            "camiseta_branca_estampa_cruz2.jpg"
        ],
        "modelo": "camiseta_branca_estampa_cruzGA.jpg",
        "cores": ["Branco", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 63
    },
    {
        "id": 6,
        "slug": "camiseta_branca_estampa_sakura",
        "nome": "Camiseta Branca Estampa Sakura",
        "categoria": "Partes Superiores",
        "preco": 94.9,
        "precoAnterior": 118.63,
        "descricao": "Camiseta branca com estampa floral sakura e modelagem ampla confortável.",
        "imagens": [
            "camiseta_branca_estampa_sakura.jpg",
            "camiseta_branca_estampa_sakura2.jpg"
        ],
        "modelo": "camiseta_branca_estampa_sakuraGA.jpg",
        "cores": ["Branco", "Rosa"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 57
    },
    {
        "id": 7,
        "slug": "camiseta_branca_leopardo",
        "nome": "Camiseta Branca com Estampa Animal Print",
        "categoria": "Partes Superiores",
        "preco": 94.9,
        "precoAnterior": 118.63,
        "descricao": "Camiseta branca com estampa animal print de leopardo e visual urbano.",
        "imagens": [
            "camiseta_branca_leopardo.jpg",
            "camiseta_branca_leopardo2.jpg"
        ],
        "modelo": "camiseta_branca_leopardoGA.jpg",
        "cores": ["Branco", "Marrom", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.7,
        "avaliacoes": 29
    },
    {
        "id": 8,
        "slug": "camiseta_cinza_23",
        "nome": "Camiseta Cinza 23",
        "categoria": "Partes Superiores",
        "preco": 89.9,
        "precoAnterior": 112.38,
        "descricao": "Camiseta cinza com estampa numérica 23 estilo jersey urbano.",
        "imagens": [
            "camiseta_cinza_23.jpg",
            "camiseta_cinza_232.jpg"
        ],
        "modelo": "camiseta_cinza_23GA.jpg",
        "cores": ["Cinza", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 44
    },
    {
        "id": 9,
        "slug": "camiseta_preta_estampa_buda",
        "nome": "Camiseta Preta Estampa Buda",
        "categoria": "Partes Superiores",
        "preco": 94.9,
        "precoAnterior": 118.63,
        "descricao": "Camiseta preta com estampa gráfica de Buda e acabamento reforçado.",
        "imagens": [
            "camiseta_preta_estampa_buda.jpg",
            "camiseta_preta_estampa_buda2.jpg"
        ],
        "modelo": "camiseta_preta_estampa_budaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 48
    },
    {
        "id": 10,
        "slug": "camiseta_preta_i_wish",
        "nome": "Camiseta Preta \"I Wish I Was Real\"",
        "categoria": "Partes Superiores",
        "preco": 89.9,
        "precoAnterior": 112.38,
        "descricao": "Camiseta preta com tipografia frontal \"I Wish I Was Real\" e visual alternativo.",
        "imagens": [
            "camiseta_preta_i_wish.jpg"
        ],
        "modelo": "camiseta_preta_i_wishGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 39
    },
    {
        "id": 11,
        "slug": "camiseta_rosa_estampa",
        "nome": "Camiseta Rosa Estampada",
        "categoria": "Partes Superiores",
        "preco": 94.9,
        "precoAnterior": 118.63,
        "descricao": "Camiseta rosa com estampa gráfica exclusiva e caimento streetwear.",
        "imagens": [
            "camiseta_rosa_estampa.jpg",
            "camiseta_rosa_estampa2.jpg"
        ],
        "modelo": "camiseta_rosa_estampaGA.jpg",
        "cores": ["Rosa"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 31
    },
    {
        "id": 12,
        "slug": "polo_branca_estampa_animal_print",
        "nome": "Polo Branca com Estampa Animal Print",
        "categoria": "Partes Superiores",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Polo branca com estampa animal print e gola tradicional, com visual urbano.",
        "imagens": [
            "polo_branca_estampa_animal_print.jpg",
            "polo_branca_estampa_animal_print2.jpg"
        ],
        "modelo": "polo_branca_estampa_animal_printGA.jpg",
        "cores": ["Branco", "Marrom", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 46
    },
    {
        "id": 13,
        "slug": "polo_caveira",
        "nome": "Polo Preta com Estampa de Caveira",
        "categoria": "Partes Superiores",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Camisa polo preta com estampa gráfica de caveira e gola contrastante.",
        "imagens": [
            "polo_caveira.jpg",
            "polo_caveira2.jpg"
        ],
        "modelo": "polo_caveiraGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 53
    },
    {
        "id": 14,
        "slug": "polo_cinza_grafica",
        "nome": "Polo Cinza com Estampa Gráfica",
        "categoria": "Partes Superiores",
        "preco": 134.9,
        "precoAnterior": 168.63,
        "descricao": "Polo cinza com estampa gráfica frontal e recortes urbanos.",
        "imagens": [
            "polo_cinza_grafica.jpg",
            "polo_cinza_grafica2.jpg"
        ],
        "modelo": "polo_cinza_graficaGA.jpg",
        "cores": ["Cinza", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 37
    },
    {
        "id": 15,
        "slug": "polo_listrada_azul_branca",
        "nome": "Polo Listrada Azul e Branca",
        "categoria": "Partes Superiores",
        "preco": 134.9,
        "precoAnterior": 168.63,
        "descricao": "Camisa polo listrada em azul e branco com gola clássica e corte moderno.",
        "imagens": [
            "polo_listrada_azul_branca.jpg",
            "polo_listrada_azul_branca2.jpg"
        ],
        "modelo": "polo_listrada_azul_brancaGA.jpg",
        "cores": ["Azul", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 41
    },
    {
        "id": 16,
        "slug": "polo_manga_longa_listrada",
        "nome": "Polo Manga Longa Listrada",
        "categoria": "Partes Superiores",
        "preco": 144.9,
        "precoAnterior": 181.13,
        "descricao": "Polo de manga longa listrada com visual casual e streetwear.",
        "imagens": [
            "polo_manga_longa_listrada.jpg",
            "polo_manga_longa_listrada2.jpg"
        ],
        "modelo": "polo_manga_longa_listradaGA.jpg",
        "cores": ["Branco", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 49
    },
    {
        "id": 17,
        "slug": "polo_preta_estampada",
        "nome": "Polo Preta com Estampa Gráfica",
        "categoria": "Partes Superiores",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Camisa polo preta com estampa gráfica detalhada e caimento confortável.",
        "imagens": [
            "polo_preta_estampada.jpg",
            "polo_preta_estampada2.jpg"
        ],
        "modelo": "polo_preta_estampadaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 35
    },
    {
        "id": 18,
        "slug": "polo_preto_losangeles",
        "nome": "Polo Preta Los Angeles",
        "categoria": "Partes Superiores",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Camisa polo preta com estampa Los Angeles e gola polo reforçada.",
        "imagens": [
            "polo_preto_losangeles.jpg",
            "polo_preto_losangeles2.jpg"
        ],
        "modelo": "polo_preto_losangelesGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 58
    },
    {
        "id": 19,
        "slug": "polo_rosa_leopardo",
        "nome": "Polo Rosa com Estampa Animal Print",
        "categoria": "Partes Superiores",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Camisa polo rosa com estampa animal print de leopardo e estilo marcante.",
        "imagens": [
            "polo_rosa_leopardo.jpg",
            "polo_rosa_leopardo2.jpg"
        ],
        "modelo": "polo_rosa_leopardoGA.jpg",
        "cores": ["Rosa", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 43
    },
    {
        "id": 20,
        "slug": "polo_rosa_listrada",
        "nome": "Polo Rosa Listrada",
        "categoria": "Partes Superiores",
        "preco": 134.9,
        "precoAnterior": 168.63,
        "descricao": "Camisa polo listrada em tons de rosa com gola clássica.",
        "imagens": [
            "polo_rosa_listrada.jpg",
            "polo_rosa_listrada2.jpg"
        ],
        "modelo": "polo_rosa_listradaGA.jpg",
        "cores": ["Rosa", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 32
    },
    {
        "id": 21,
        "slug": "sueter_cinza_texturizado",
        "nome": "Suéter Texturizado Cinza",
        "categoria": "Partes Superiores",
        "preco": 159.9,
        "precoAnterior": 199.88,
        "descricao": "Suéter cinza em malha texturizada com caimento solto e confortável.",
        "imagens": [
            "sueter_cinza_texturizado.jpg",
            "sueter_cinza_texturizado2.jpg"
        ],
        "modelo": "sueter_cinza_texturizadoGA.jpg",
        "cores": ["Cinza"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 64
    },
    {
        "id": 22,
        "slug": "moletom_branco",
        "nome": "Moletom Branco Básico",
        "categoria": "Partes Superiores",
        "preco": 169.9,
        "precoAnterior": 212.38,
        "descricao": "Moletom branco encorpado com capuz e modelagem ampla.",
        "imagens": [
            "moletom_branco2.jpg"
        ],
        "modelo": "moletom_brancoGA.jpg",
        "cores": ["Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 47
    },
    {
        "id": 23,
        "slug": "moletom_listrado_vermelho_preto",
        "nome": "Moletom Listrado Vermelho e Preto",
        "categoria": "Partes Superiores",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Moletom com listras largas em vermelho e preto e estética grunge alternativa.",
        "imagens": [
            "moletom_listrado_vermelho_preto.jpg",
            "moletom_listrado_vermelho_preto2.jpg"
        ],
        "modelo": "moletom_listrado_vermelho_pretoGA.jpg",
        "cores": ["Vermelho", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 71
    },
    {
        "id": 24,
        "slug": "moletom_preto_boxy",
        "nome": "Moletom Preto Boxy",
        "categoria": "Partes Superiores",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Moletom preto com corte boxy moderno, tecido encorpado e caimento estruturado.",
        "imagens": [
            "moletom_preto_boxy.jpg",
            "moletom_preto_boxy2.jpg"
        ],
        "modelo": "moletom_preto_boxyGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 69
    },
    {
        "id": 25,
        "slug": "moletom_preto_pelo_branco",
        "nome": "Moletom Preto com Capuz Peluciado Branco",
        "categoria": "Partes Superiores",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Moletom preto com detalhe de pelo branco no capuz e visual urbano.",
        "imagens": [
            "moletom_preto_pelo_branco.jpg",
            "moletom_preto_pelo_branco2.jpg"
        ],
        "modelo": "moletom_preto_pelo_brancoGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 55
    },
    {
        "id": 26,
        "slug": "moletom_vermelho",
        "nome": "Moletom Vermelho com Capuz",
        "categoria": "Partes Superiores",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Moletom vermelho vibrante com capuz ajustável e bolso canguru.",
        "imagens": [
            "moletom_vermelho.jpg",
            "moletom_vermelho2.jpg"
        ],
        "modelo": "moletom_vermelhoGA.jpg",
        "cores": ["Vermelho"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 44
    },
    {
        "id": 27,
        "slug": "casaco_preto_abidas",
        "nome": "Casaco Preto Esportivo Listrado",
        "categoria": "Partes Superiores",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Casaco preto esportivo com listras laterais e fechamento frontal.",
        "imagens": [
            "casaco_preto_abidas.jpg",
            "casaco_preto_abidas2.jpg"
        ],
        "modelo": "casaco_preto_abidasGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 52
    },
    {
        "id": 28,
        "slug": "corta_vento_preto",
        "nome": "Jaqueta Corta-Vento Preta com Capuz",
        "categoria": "Partes Superiores",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Jaqueta corta-vento preta leve com capuz e acabamento resistente.",
        "imagens": [
            "corta_vento_preto.jpg",
            "corta_vento_preto2.jpg"
        ],
        "modelo": "corta_vento_pretoGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 48
    },
    {
        "id": 29,
        "slug": "jaqueta_azul_capuz",
        "nome": "Jaqueta Azul com Capuz",
        "categoria": "Partes Superiores",
        "preco": 219.9,
        "precoAnterior": 274.88,
        "descricao": "Jaqueta azul com capuz integrado, bolsos funcionais e modelagem urbana.",
        "imagens": [
            "jaqueta_azul_capuz.jpg",
            "jaqueta_azul_capuz2.jpg"
        ],
        "modelo": "jaqueta_azul_capuzGA.jpg",
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 39
    },
    {
        "id": 30,
        "slug": "jaqueta_branca_estampada",
        "nome": "Jaqueta Branca Estampada",
        "categoria": "Partes Superiores",
        "preco": 229.9,
        "precoAnterior": 287.38,
        "descricao": "Jaqueta branca com estampa gráfica exclusiva e acabamento premium.",
        "imagens": [
            "jaqueta_branca_estampada.jpg",
            "jaqueta_branca_estampada2.jpg"
        ],
        "modelo": "jaqueta_branca_estampadaGA.jpg",
        "cores": ["Branco", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 45
    },
    {
        "id": 31,
        "slug": "jaqueta_couro_preta",
        "nome": "Jaqueta de Couro Preta",
        "categoria": "Partes Superiores",
        "preco": 279.9,
        "precoAnterior": 349.88,
        "descricao": "Jaqueta de couro sintético preta com zíper frontal e visual alternativo.",
        "imagens": [
            "jaqueta_couro_preta.jpg",
            "jaqueta_couro_preta2.jpg"
        ],
        "modelo": "jaqueta_couro_pretaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 82
    },
    {
        "id": 32,
        "slug": "jaqueta_couro_vinho",
        "nome": "Jaqueta de Couro Vinho",
        "categoria": "Partes Superiores",
        "preco": 279.9,
        "precoAnterior": 349.88,
        "descricao": "Jaqueta de couro sintético na cor vinho com detalhes marcados nas costas.",
        "imagens": [
            "jaqueta_couro_vinho_costas.jpg",
            "jaqueta_couro_vinho_costas2.jpg"
        ],
        "modelo": "jaqueta_couro_vinho_costasGA.jpg",
        "cores": ["Vinho"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 61
    },
    {
        "id": 33,
        "slug": "jaqueta_marrom_peluciada",
        "nome": "Jaqueta Marrom Peluciada",
        "categoria": "Partes Superiores",
        "preco": 259.9,
        "precoAnterior": 324.88,
        "descricao": "Jaqueta marrom com forro e acabamento peluciado, ideal para dias frios.",
        "imagens": [
            "jaqueta_marrom_peluciada.jpg",
            "jaqueta_marrom_peluciada2.jpg"
        ],
        "modelo": "jaqueta_marrom_peluciadaGA.jpg",
        "cores": ["Marrom"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 47
    },
    {
        "id": 34,
        "slug": "jaqueta_pintadinha",
        "nome": "Jaqueta Estampada Pintadinha",
        "categoria": "Partes Superiores",
        "preco": 219.9,
        "precoAnterior": 274.88,
        "descricao": "Jaqueta com padronagem pintadinha diferenciada e corte streetwear.",
        "imagens": [
            "jaqueta_pintadinha.jpg",
            "jaqueta_pintadinha2.jpg"
        ],
        "modelo": "jaqueta_pintadinhaGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 36
    },
    {
        "id": 35,
        "slug": "jaqueta_preta_capuz_vermelho",
        "nome": "Jaqueta Preta com Capuz Vermelho",
        "categoria": "Partes Superiores",
        "preco": 229.9,
        "precoAnterior": 287.38,
        "descricao": "Jaqueta preta contrastante com capuz vermelho e visual urbano.",
        "imagens": [
            "jaqueta_preta_capuz_vermelho.jpg",
            "jaqueta_preta_capuz_vermelho2.jpg"
        ],
        "modelo": "jaqueta_preta_capuz_vermelhoGA.jpg",
        "cores": ["Preto", "Vermelho"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 40
    },
    {
        "id": 36,
        "slug": "jaqueta_preta_cruz",
        "nome": "Jaqueta Preta Estampa Cruz",
        "categoria": "Partes Superiores",
        "preco": 239.9,
        "precoAnterior": 299.88,
        "descricao": "Jaqueta preta com aplicações e estampas de cruz com estética gótica urbana.",
        "imagens": [
            "jaqueta_preta_cruz.jpg",
            "jaqueta_preta_cruz2.jpg"
        ],
        "modelo": "jaqueta_preta_cruzGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 67
    },
    {
        "id": 37,
        "slug": "jaqueta_preta_peluciada",
        "nome": "Jaqueta Preta Peluciada",
        "categoria": "Partes Superiores",
        "preco": 259.9,
        "precoAnterior": 324.88,
        "descricao": "Jaqueta preta com acabamento peluciado interno e gola estruturada.",
        "imagens": [
            "jaqueta_preta_peluciada.jpg",
            "jaqueta_preta_peluciada2.jpg"
        ],
        "modelo": "jaqueta_preta_peluciadaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 54
    },
    {
        "id": 38,
        "slug": "jaqueta_preto_estampado",
        "nome": "Jaqueta Preta com Mangas Estampadas",
        "categoria": "Partes Superiores",
        "preco": 229.9,
        "precoAnterior": 287.38,
        "descricao": "Jaqueta preta com gráficos detalhados e caimento confortável.",
        "imagens": [
            "jaqueta_preto_estampado.jpg",
            "jaqueta_preto_estampado2.jpg"
        ],
        "modelo": "jaqueta_preto_estampadoGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 43
    },
    {
        "id": 39,
        "slug": "jaqueta_puffer_preta",
        "nome": "Jaqueta Puffer Preta",
        "categoria": "Partes Superiores",
        "preco": 269.9,
        "precoAnterior": 337.38,
        "descricao": "Jaqueta puffer preta acolchoada com isolamento térmico e design minimalista.",
        "imagens": [
            "jaqueta_puffer_preta.jpg",
            "jaqueta_puffer_preta2.jpg"
        ],
        "modelo": "jaqueta_puffer_pretaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 76
    },
    {
        "id": 40,
        "slug": "jaqueta_puffer_preta_estampada",
        "nome": "Jaqueta Puffer Preta Estampada",
        "categoria": "Partes Superiores",
        "preco": 289.9,
        "precoAnterior": 362.38,
        "descricao": "Jaqueta puffer preta acolchoada com estampa gráfica exclusiva.",
        "imagens": [
            "jaqueta_puffer_preta_estampada.jpg",
            "jaqueta_puffer_preta_estampada2.jpg"
        ],
        "modelo": "jaqueta_puffer_preta_estampadaGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 65
    },
    {
        "id": 41,
        "slug": "calca_baggy_azul",
        "nome": "Calça Baggy Azul",
        "categoria": "Partes Inferiores",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Calça azul com modelagem baggy ampla e caimento streetwear.",
        "imagens": [
            "calça_baggy_azul.jpg",
            "calça_baggy_azul2.jpg"
        ],
        "modelo": "calça_baggy_azulGA.jpg",
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 50
    },
    {
        "id": 42,
        "slug": "calca_baggy_bege",
        "nome": "Calça Baggy Bege",
        "categoria": "Partes Inferiores",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Calça bege de corte baggy com bolsos utilitários e caimento solto.",
        "imagens": [
            "calça_baggy_bege.jpg",
            "calça_baggy_bege2.jpg"
        ],
        "modelo": "calça_baggy_begeGA.jpg",
        "cores": ["Bege"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 47
    },
    {
        "id": 43,
        "slug": "calca_jeans_azul",
        "nome": "Calça Jeans Azul",
        "categoria": "Partes Inferiores",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Calça jeans azul tradicional com lavagem clássica e acabamento resistente.",
        "imagens": [
            "calca_jeans_azul.jpg",
            "calca_jeans_azul2.jpg"
        ],
        "modelo": null,
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.7,
        "avaliacoes": 38
    },
    {
        "id": 44,
        "slug": "calca_jeans_baggy_azul",
        "nome": "Calça Jeans Baggy Azul",
        "categoria": "Partes Inferiores",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Calça jeans azul com modelagem baggy larga e lavagem urbana.",
        "imagens": [
            "calca_jeans_baggy_azul.jpg",
            "calca_jeans_baggy_azul2.jpg",
            "calca_jeans_baggy_azul_modelo.jpg"
        ],
        "modelo": "calça_jeans_baggy_azul_modeloGA.jpg",
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 74
    },
    {
        "id": 45,
        "slug": "calca_jeans_baggy_azul_estampa",
        "nome": "Calça Jeans Baggy Azul Estampada",
        "categoria": "Partes Inferiores",
        "preco": 209.9,
        "precoAnterior": 262.38,
        "descricao": "Calça jeans baggy azul com estampa gráfica aplicada e caimento amplo.",
        "imagens": [
            "calça_jeans_baggy_azul_estampa.jpg",
            "calça_jeans_baggy_azul_estampa2.jpg"
        ],
        "modelo": "calça_jeans_baggy_azul_estampaGA.jpg",
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 62
    },
    {
        "id": 46,
        "slug": "calca_jeans_baggy_azul_velho",
        "nome": "Calça Jeans Baggy Azul Lavagem Vintage",
        "categoria": "Partes Inferiores",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Calça jeans baggy azul com lavagem estonada vintage e corte largo.",
        "imagens": [
            "calca_jeans_baggy_azul_velho.jpg",
            "calca_jeans_baggy_azul_velho2.jpg"
        ],
        "modelo": "calca_jeans_baggy_azul_velhoGA.jpg",
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 53
    },
    {
        "id": 47,
        "slug": "calca_moletom_baggy_branca_ak",
        "nome": "Calça Moletom Baggy Branca AK",
        "categoria": "Partes Inferiores",
        "preco": 149.9,
        "precoAnterior": 187.38,
        "descricao": "Calça de moletom branca modelagem baggy com estampa AK e cintura elástica.",
        "imagens": [
            "calça_moletom_baggy_branca_ak.jpg",
            "calça_moletom_baggy_branca_ak2.jpg"
        ],
        "modelo": "calça_moletom_baggy_branca_akGA.jpg",
        "cores": ["Branco", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 46
    },
    {
        "id": 48,
        "slug": "calca_moletom_baggy_listras",
        "nome": "Calça Moletom Baggy com Listras",
        "categoria": "Partes Inferiores",
        "preco": 149.9,
        "precoAnterior": 187.38,
        "descricao": "Calça de moletom baggy com listras laterais esportivas e caimento solto.",
        "imagens": [
            "calça_moletom_baggy_listras.jpg",
            "calça_moletom_baggy_listras2.jpg"
        ],
        "modelo": "calça_moletom_baggy_listrasGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 41
    },
    {
        "id": 49,
        "slug": "calca_moletom_baggy_preta",
        "nome": "Calça Moletom Baggy Preta",
        "categoria": "Partes Inferiores",
        "preco": 149.9,
        "precoAnterior": 187.38,
        "descricao": "Calça de moletom preta com modelagem baggy ampla e máximo conforto.",
        "imagens": [
            "calça_moletom_baggy_preta.jpg",
            "calça_moletom_baggy_preta2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 59
    },
    {
        "id": 50,
        "slug": "calca_moletom_branca_estampada",
        "nome": "Calça Moletom Branca Estampada",
        "categoria": "Partes Inferiores",
        "preco": 149.9,
        "precoAnterior": 187.38,
        "descricao": "Calça moletom branca com detalhes gráficos, bolsos laterais e modelagem confortável.",
        "imagens": [
            "calça_moletom_branca_estampada.jpg",
            "calça_moletom_branca_estampada2.jpg"
        ],
        "modelo": "calça_moletom_branca_estampadaGA.jpg",
        "cores": ["Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 45
    },
    {
        "id": 51,
        "slug": "calca_preta_baggy_estampada",
        "nome": "Calça Baggy Preta Estampada",
        "categoria": "Partes Inferiores",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Calça preta de modelagem baggy e estampa gráfica, com caimento amplo.",
        "imagens": [
            "calça_preta_baggy_estampada.jpg",
            "calça_preta_baggy_estampada2.jpg"
        ],
        "modelo": "calça_preta_baggy_estampadaGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 68
    },
    {
        "id": 52,
        "slug": "calca_preta_flare",
        "nome": "Calça Preta Flare",
        "categoria": "Partes Inferiores",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Calça preta com modelagem flare ajustada na coxa e abertura na barra.",
        "imagens": [
            "calca_preta_flare.jpg",
            "calca_preta_flare2.jpg",
            "calca_preta_flare_detalhe.jpg",
            "calca_preta_flare_detalhe2.jpg"
        ],
        "modelo": "calca_preta_flareGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 72
    },
    {
        "id": 53,
        "slug": "calca_preta_flare_estrela",
        "nome": "Calça Preta Flare Estrela",
        "categoria": "Partes Inferiores",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Calça preta flare com aplicação de estrela e visual Y2K streetwear.",
        "imagens": [
            "calca_preta_flare_estrela.jpg",
            "calca_preta_flare_estrela2.jpg"
        ],
        "modelo": "calca_preta_flare_estrelaGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 66
    },
    {
        "id": 54,
        "slug": "calca_preta_larga",
        "nome": "Calça Preta Larga",
        "categoria": "Partes Inferiores",
        "preco": 169.9,
        "precoAnterior": 212.38,
        "descricao": "Calça preta de corte reto amplo com caimento fluido.",
        "imagens": [
            "calca_preta_larga_066.jpg"
        ],
        "modelo": null,
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.7,
        "avaliacoes": 33
    },
    {
        "id": 55,
        "slug": "calca_preta_reta",
        "nome": "Calça Preta Reta",
        "categoria": "Partes Inferiores",
        "preco": 169.9,
        "precoAnterior": 212.38,
        "descricao": "Calça preta de corte reto versátil para composições urbanas.",
        "imagens": [
            "calça_preta_reta.jpg"
        ],
        "modelo": "calça_preta_retagA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 42
    },
    {
        "id": 56,
        "slug": "calca_preta_vermelha_baggy",
        "nome": "Calça Baggy Preta e Vermelha",
        "categoria": "Partes Inferiores",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Calça baggy preta com recortes e detalhes em vermelho contrastante.",
        "imagens": [
            "calca_preta_vermelha_baggy.jpg",
            "calca_preta_vermelha_baggy2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Vermelho"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 49
    },
    {
        "id": 57,
        "slug": "calca_reta_cruz",
        "nome": "Calça Reta Estampa Cruz",
        "categoria": "Partes Inferiores",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Calça de corte reto com detalhes de cruz e estética alternativa.",
        "imagens": [
            "calça_reta_cruz.jpg",
            "calça_reta_cruz2.jpg"
        ],
        "modelo": "calça_reta_cruzGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 61
    },
    {
        "id": 58,
        "slug": "jorts_camuflagem",
        "nome": "Jorts Camuflado",
        "categoria": "Partes Inferiores",
        "preco": 149.9,
        "precoAnterior": 187.38,
        "descricao": "Bermuda jeans jorts com estampa camuflada e modelagem ampla abaixo do joelho.",
        "imagens": [
            "jorts_camuflagem.jpg",
            "jorts_camuflagem2.jpg"
        ],
        "modelo": "jorts_camuflagemGA.jpg",
        "cores": ["Verde", "Marrom"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 52
    },
    {
        "id": 59,
        "slug": "jorts_preto",
        "nome": "Jorts Preto",
        "categoria": "Partes Inferiores",
        "preco": 149.9,
        "precoAnterior": 187.38,
        "descricao": "Bermuda jeans jorts preta com lavagem escura e corte largo.",
        "imagens": [
            "jorts_preto.jpg",
            "jorts_preto2.jpg"
        ],
        "modelo": "jorts_pretoGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 64
    },
    {
        "id": 60,
        "slug": "jorts_preto_estampa_grafica",
        "nome": "Jorts Preto com Estampa Gráfica",
        "categoria": "Partes Inferiores",
        "preco": 159.9,
        "precoAnterior": 199.88,
        "descricao": "Bermuda jeans jorts preta com estampa gráfica marcante e caimento baggy.",
        "imagens": [
            "jorts_preto_estampa_grafica.jpg",
            "jorts_preto_estampa_grafica2.jpg"
        ],
        "modelo": "jorts_preto_estampa_graficaGA.jpg",
        "cores": ["Preto", "Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 58
    },
    {
        "id": 61,
        "slug": "jorts_sakura",
        "nome": "Jorts Estampa Sakura",
        "categoria": "Partes Inferiores",
        "preco": 159.9,
        "precoAnterior": 199.88,
        "descricao": "Bermuda jeans jorts com bordado floral sakura e corte amplo.",
        "imagens": [
            "jorts_sakura.jpg",
            "jorts_sakura2.jpg"
        ],
        "modelo": "jorts_sakuraGA.jpg",
        "cores": ["Azul", "Rosa"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 70
    },
    {
        "id": 62,
        "slug": "conjunto_azul_marinho",
        "nome": "Conjunto Azul-Marinho",
        "categoria": "Conjuntos",
        "preco": 249.9,
        "precoAnterior": 312.38,
        "descricao": "Conjunto azul-marinho completo com visual urbano e acabamento confortável.",
        "imagens": [
            "conjunto_azul_marinho.jpg",
            "conjunto_azul_marinho2.jpg"
        ],
        "modelo": "conjunto_azul_marinhoGA.jpg",
        "cores": ["Azul"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 39
    },
    {
        "id": 63,
        "slug": "conjunto_branco",
        "nome": "Conjunto Branco",
        "categoria": "Conjuntos",
        "preco": 249.9,
        "precoAnterior": 312.38,
        "descricao": "Conjunto branco streetwear com caimento solto e acabamento premium.",
        "imagens": [
            "conjunto_branco.jpg",
            "conjunto_branco2.jpg"
        ],
        "modelo": "conjunto_brancoGA.jpg",
        "cores": ["Branco"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 41
    },
    {
        "id": 64,
        "slug": "conjunto_branco_preto",
        "nome": "Conjunto Branco e Preto",
        "categoria": "Conjuntos",
        "preco": 259.9,
        "precoAnterior": 324.88,
        "descricao": "Conjunto bicolor em branco e preto com detalhes nas costas e visual marcante.",
        "imagens": [
            "conjunto_branco_preto_costa.jpg",
            "conjunto_branco_preto_costas2.jpg"
        ],
        "modelo": "conjunto_branco_pretoGA.jpg",
        "cores": ["Branco", "Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 48
    },
    {
        "id": 65,
        "slug": "conjunto_preto",
        "nome": "Conjunto Preto",
        "categoria": "Conjuntos",
        "preco": 249.9,
        "precoAnterior": 312.38,
        "descricao": "Conjunto preto monocromático com estética urbana e modelagem confortável.",
        "imagens": [
            "conjunto_preto.jpg",
            "conjunto_preto2.jpg"
        ],
        "modelo": "conjunto_pretoGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 55
    },
    {
        "id": 66,
        "slug": "conjunto_preto_costas_detalhe",
        "nome": "Conjunto Preto com Detalhe nas Costas",
        "categoria": "Conjuntos",
        "preco": 259.9,
        "precoAnterior": 324.88,
        "descricao": "Conjunto preto com estampa exclusiva nas costas e corte moderno.",
        "imagens": [
            "conjunto_preto_costas_detalhe.jpg",
            "conjunto_preto_costas_detalhe2.jpg"
        ],
        "modelo": "conjunto_preto_costas_detalheGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 43
    },
    {
        "id": 67,
        "slug": "conjunto_preto_esportivo",
        "nome": "Conjunto Preto Esportivo",
        "categoria": "Conjuntos",
        "preco": 259.9,
        "precoAnterior": 324.88,
        "descricao": "Conjunto preto esportivo com tecido leve e recortes dinâmicos.",
        "imagens": [
            "conjunto_preto_esportivo.jpg",
            "conjunto_preto_esportivo2.jpg"
        ],
        "modelo": "conjunto_preto_esportivoGA.jpg",
        "cores": ["Preto"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 46
    },
    {
        "id": 68,
        "slug": "conjunto_preto_rosa",
        "nome": "Conjunto Preto e Rosa",
        "categoria": "Conjuntos",
        "preco": 259.9,
        "precoAnterior": 324.88,
        "descricao": "Conjunto preto com detalhes em rosa contrastante e estética streetwear.",
        "imagens": [
            "conjunto_preto_rosa.jpg",
            "conjunto_preto_rosa2.jpg"
        ],
        "modelo": "conjunto_preto_rosaGA.jpg",
        "cores": ["Preto", "Rosa"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 51
    },
    {
        "id": 69,
        "slug": "conjunto_puffer_verde",
        "nome": "Conjunto Puffer Verde",
        "categoria": "Conjuntos",
        "preco": 319.9,
        "precoAnterior": 399.88,
        "descricao": "Conjunto puffer verde acolchoado com visual robusto e acabamento térmico.",
        "imagens": [
            "conjunto_puffer_verde.jpg",
            "conjunto_puffer_verde2.jpg"
        ],
        "modelo": "conjunto_puffer_verdeGA.jpg",
        "cores": ["Verde"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.9,
        "avaliacoes": 63
    },
    {
        "id": 70,
        "slug": "conjunto_rosa",
        "nome": "Conjunto Rosa",
        "categoria": "Conjuntos",
        "preco": 249.9,
        "precoAnterior": 312.38,
        "descricao": "Conjunto rosa completo com modelagem confortável e estilo urbano.",
        "imagens": [
            "conjunto_rosa.jpg",
            "conjunto_rosa2.jpg"
        ],
        "modelo": "conjunto_rosaGA.jpg",
        "cores": ["Rosa"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 37
    },
    {
        "id": 71,
        "slug": "conjunto_vinho",
        "nome": "Conjunto Vinho",
        "categoria": "Conjuntos",
        "preco": 249.9,
        "precoAnterior": 312.38,
        "descricao": "Conjunto na cor vinho com acabamento macio e corte streetwear.",
        "imagens": [
            "conjunto_vinho.jpg",
            "conjunto_vinho2.jpg"
        ],
        "modelo": "conjunto_vinhoGA.jpg",
        "cores": ["Vinho"],
        "tamanhos": ["P", "M", "G", "GG", "XG"],
        "avaliacao": 4.8,
        "avaliacoes": 44
    },
    {
        "id": 72,
        "slug": "anel_cruz",
        "nome": "Anel Cruz",
        "categoria": "Acessórios",
        "preco": 49.9,
        "precoAnterior": 62.38,
        "descricao": "Anel metálico com detalhe de cruz e estética gótica alternativa.",
        "imagens": [
            "anel_cruz_046.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 28
    },
    {
        "id": 73,
        "slug": "anel_pentagrama",
        "nome": "Anel Pentagrama",
        "categoria": "Acessórios",
        "preco": 54.9,
        "precoAnterior": 68.63,
        "descricao": "Anel com símbolo de pentagrama em relevo e acabamento escurecido.",
        "imagens": [
            "anel_pentagrama_011.jpg",
            "anel_pentagrama_detalhe_012.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 35
    },
    {
        "id": 74,
        "slug": "anel_pentagrama_prateado",
        "nome": "Anel Pentagrama Prateado",
        "categoria": "Acessórios",
        "preco": 54.9,
        "precoAnterior": 68.63,
        "descricao": "Anel prateado com pentagrama detalhado e acabamento polido.",
        "imagens": [
            "anel_pentagrama_prateado_035.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 24
    },
    {
        "id": 75,
        "slug": "anel_prateado",
        "nome": "Anel Prateado",
        "categoria": "Acessórios",
        "preco": 49.9,
        "precoAnterior": 62.38,
        "descricao": "Anel prateado com design robusto e acabamento metálico.",
        "imagens": [
            "anel_prateado_030.jpg",
            "anel_prateado_detalhe_032.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 31
    },
    {
        "id": 76,
        "slug": "cinto_caveira_amor",
        "nome": "Cinto Caveira Amor",
        "categoria": "Acessórios",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Cinto alternativo com fivela e detalhes temáticos de caveira.",
        "imagens": [
            "cinto_caveira_amor.jpg",
            "cinto_caveira_amor2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 42
    },
    {
        "id": 77,
        "slug": "cinto_caveira_pirata",
        "nome": "Cinto Caveira Pirata",
        "categoria": "Acessórios",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Cinto com fivela de caveira pirata metálica e visual marcante.",
        "imagens": [
            "cinto_caveira_pirata.jpg",
            "cinto_caveira_pirata2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 38
    },
    {
        "id": 78,
        "slug": "cinto_corrente_prateado",
        "nome": "Cinto Corrente Prateado",
        "categoria": "Acessórios",
        "preco": 69.9,
        "precoAnterior": 87.38,
        "descricao": "Cinto em corrente metálica prateada para sobreposição em calças e jorts.",
        "imagens": [
            "cinto_corrente_prateado.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 33
    },
    {
        "id": 79,
        "slug": "cinto_preto",
        "nome": "Cinto Preto Clássico",
        "categoria": "Acessórios",
        "preco": 69.9,
        "precoAnterior": 87.38,
        "descricao": "Cinto preto versátil com fivela metálica.",
        "imagens": [
            "cinto_preto.jpg",
            "cinto_preto2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto"],
        "tamanhos": ["Único"],
        "avaliacao": 4.7,
        "avaliacoes": 27
    },
    {
        "id": 80,
        "slug": "cinto_preto_adaga",
        "nome": "Cinto Preto Adaga",
        "categoria": "Acessórios",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Cinto preto com fivela e aplicação em formato de adaga.",
        "imagens": [
            "cinto_preto_adaga.jpg",
            "cinto_preto_adaga2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 45
    },
    {
        "id": 81,
        "slug": "cinto_preto_cruz",
        "nome": "Cinto Preto Cruz",
        "categoria": "Acessórios",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Cinto preto com detalhes metálicos de cruz ao longo da tira.",
        "imagens": [
            "cinto_preto_cruz.jpg",
            "cinto_preto_cruz_detalhe.jpg",
            "cinto_preto_cruz_detalhe2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 50
    },
    {
        "id": 82,
        "slug": "cinto_preto_fivela",
        "nome": "Cinto Preto Fivela Ornamentada",
        "categoria": "Acessórios",
        "preco": 74.9,
        "precoAnterior": 93.63,
        "descricao": "Cinto preto com fivela metálica ornamentada.",
        "imagens": [
            "cinto_preto_fivela_028.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 29
    },
    {
        "id": 83,
        "slug": "cinto_preto_fivela_dupla",
        "nome": "Cinto Preto Fivela Dupla",
        "categoria": "Acessórios",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Cinto preto com ilhoses e fivela dupla metálica.",
        "imagens": [
            "cinto_preto_fivela_dupla.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 34
    },
    {
        "id": 84,
        "slug": "cinto_preto_fivela_metal",
        "nome": "Cinto Preto Fivela de Metal",
        "categoria": "Acessórios",
        "preco": 74.9,
        "precoAnterior": 93.63,
        "descricao": "Cinto preto com fivela robusta de metal escovado.",
        "imagens": [
            "cinto_preto_fivela_metal.jpg",
            "cinto_preto_fivela_metal2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 36
    },
    {
        "id": 85,
        "slug": "cinto_preto_fivela_prateada",
        "nome": "Cinto Preto Fivela Prateada",
        "categoria": "Acessórios",
        "preco": 74.9,
        "precoAnterior": 93.63,
        "descricao": "Cinto preto com fivela prateada destacada.",
        "imagens": [
            "cinto_preto_fivela_prateada_052.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 26
    },
    {
        "id": 86,
        "slug": "cinto_preto_goth",
        "nome": "Cinto Preto Goth",
        "categoria": "Acessórios",
        "preco": 84.9,
        "precoAnterior": 106.13,
        "descricao": "Cinto preto estilo gótico com ferragens metálicas e acabamento texturizado.",
        "imagens": [
            "cinto_preto_goth.jpg",
            "cinto_preto_goth2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 54
    },
    {
        "id": 87,
        "slug": "cinto_skull_star",
        "nome": "Cinto Skull Star",
        "categoria": "Acessórios",
        "preco": 84.9,
        "precoAnterior": 106.13,
        "descricao": "Cinto alternativo com aplicações metálicas de caveira e estrela.",
        "imagens": [
            "cinto_skull_star.jpg",
            "cinto_skull_star2.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 49
    },
    {
        "id": 88,
        "slug": "cinto_vermelho",
        "nome": "Cinto Vermelho com Estampa Gráfica",
        "categoria": "Acessórios",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Cinto vermelho vibrante com estampa gráfica e fivela metálica.",
        "imagens": [
            "cinto_vermelho.jpg",
            "cinto_vermelho.jpeg",
            "cinto_vermelho2.jpeg",
            "cinto_vermelho3.jpg"
        ],
        "modelo": null,
        "cores": ["Vermelho"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 41
    },
    {
        "id": 89,
        "slug": "colar_cruz",
        "nome": "Colar Cruz",
        "categoria": "Acessórios",
        "preco": 59.9,
        "precoAnterior": 74.88,
        "descricao": "Colar com pingente de cruz em metal escuro e corrente resistente.",
        "imagens": [
            "colar_cruz_009.jpg",
            "colar_cruz_busto_010.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 37
    },
    {
        "id": 90,
        "slug": "colar_cruz_prateado",
        "nome": "Colar Cruz Prateado",
        "categoria": "Acessórios",
        "preco": 59.9,
        "precoAnterior": 74.88,
        "descricao": "Colar prateado com pingente de cruz detalhada.",
        "imagens": [
            "colar_cruz_prateado_038.jpg",
            "colar_cruz_prateado_057.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 43
    },
    {
        "id": 91,
        "slug": "colar_cruz_preto",
        "nome": "Colar Cruz Preto",
        "categoria": "Acessórios",
        "preco": 59.9,
        "precoAnterior": 74.88,
        "descricao": "Colar preto com pingente de cruz e estética dark streetwear.",
        "imagens": [
            "colar_cruz_preto_056.jpg"
        ],
        "modelo": null,
        "cores": ["Preto"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 32
    },
    {
        "id": 92,
        "slug": "colar_duplo",
        "nome": "Colar Duplo em Camadas",
        "categoria": "Acessórios",
        "preco": 64.9,
        "precoAnterior": 81.13,
        "descricao": "Colar duplo com correntes em camadas e pingentes metálicos.",
        "imagens": [
            "colar_duplo_048.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 35
    },
    {
        "id": 93,
        "slug": "colar_pentagrama",
        "nome": "Colar Pentagrama",
        "categoria": "Acessórios",
        "preco": 59.9,
        "precoAnterior": 74.88,
        "descricao": "Colar com pingente de pentagrama e corrente metálica.",
        "imagens": [
            "colar_pentagrama_006.jpg",
            "colar_pentagrama_036.jpg",
            "colar_pentagrama_modelo_008.jpg"
        ],
        "modelo": null,
        "cores": ["Preto", "Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.9,
        "avaliacoes": 52
    },
    {
        "id": 94,
        "slug": "colar_pentagrama_prateado",
        "nome": "Colar Pentagrama Prateado",
        "categoria": "Acessórios",
        "preco": 59.9,
        "precoAnterior": 74.88,
        "descricao": "Colar prateado com pingente de pentagrama e brilho metálico.",
        "imagens": [
            "colar_pentagrama_prateado_031.jpg"
        ],
        "modelo": null,
        "cores": ["Prata"],
        "tamanhos": ["Único"],
        "avaliacao": 4.8,
        "avaliacoes": 29
    }
];