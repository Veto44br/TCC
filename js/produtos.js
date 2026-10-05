const PRODUTOS = [
    {
        "id": 1,
        "slug": "bermuda_cargo_branca_estampada",
        "nome": "Bermuda Cargo Branca Estampada",
        "categoria": "Bermudas",
        "preco": 89.9,
        "precoAnterior": 112.38,
        "descricao": "Bermuda cargo branca com detalhes gráficos, bolsos laterais e modelagem confortável.",
        "imagens": [
            "bermuda_cargo_branca.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 40
    },
    {
        "id": 2,
        "slug": "blusa_branca_manga_longa_texturizada",
        "nome": "Blusa Branca de Manga Longa Texturizada",
        "categoria": "Blusas",
        "preco": 109.9,
        "precoAnterior": 137.38,
        "descricao": "Blusa branca de manga longa com tecido texturizado e modelagem confortável.",
        "imagens": [
            "camisa_branca_manga_longa.jpg",
            "blusa_branca_manga_longa.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 47
    },
    {
        "id": 3,
        "slug": "blusa_listrada_cinza_branca",
        "nome": "Blusa Listrada Cinza e Branca",
        "categoria": "Blusas",
        "preco": 129.9,
        "precoAnterior": 162.38,
        "descricao": "Blusa de manga longa listrada em cinza e branco, com visual casual e urbano.",
        "imagens": [
            "blusa_listrada_cinza_branca_02.jpg",
            "blusa_listrada_cinza_branca.jpg",
            "blusa_listrada_cinza_branca_detalhe.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco",
            "Verde",
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 54
    },
    {
        "id": 4,
        "slug": "polo_branca_animal_print",
        "nome": "Polo Branca com Estampa Animal Print",
        "categoria": "Polos",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Polo branca com estampa animal print e gola tradicional, com visual urbano.",
        "imagens": [
            "polo_leopardo_branca.jpg",
            "polo_leopardo_branca_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco",
            "Marrom",
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 61
    },
    {
        "id": 5,
        "slug": "blusa_listrada_preta_cinza",
        "nome": "Blusa Listrada Preta e Cinza",
        "categoria": "Blusas",
        "preco": 119.9,
        "precoAnterior": 149.88,
        "descricao": "Blusa de manga longa com listras pretas e cinzas e modelagem confortável.",
        "imagens": [
            "blusa_listrada_preta_cinza.jpg",
            "blusa_listrada_preta_cinza_03.jpg",
            "blusa_listrada_preta_cinza_04.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto",
            "Cinza"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 68
    },
    {
        "id": 6,
        "slug": "calca_baggy_preta_estampada",
        "nome": "Calça Baggy Preta Estampada",
        "categoria": "Calças",
        "preco": 189.9,
        "precoAnterior": 237.38,
        "descricao": "Calça preta de modelagem baggy e estampa gráfica, com caimento amplo.",
        "imagens": [
            "calca_preta_estampada.jpg",
            "calca_preta_baggy.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 75
    },
    {
        "id": 7,
        "slug": "blusa_preta_manga_longa_estampada",
        "nome": "Blusa Preta de Manga Longa Estampada",
        "categoria": "Blusas",
        "preco": 119.9,
        "precoAnterior": 149.88,
        "descricao": "Blusa preta de manga longa com estampa gráfica e modelagem confortável.",
        "imagens": [
            "blusa_preta_estampada.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 82
    },
    {
        "id": 8,
        "slug": "calca_cargo_bege",
        "nome": "Calça Cargo Bege",
        "categoria": "Calças",
        "preco": 159.9,
        "precoAnterior": 199.88,
        "descricao": "Calça cargo bege com bolsos utilitários e modelagem confortável.",
        "imagens": [
            "calca_cargo_bege.jpg",
            "calca_cargo_bege_detalhe.jpg"
        ],
        "modelo": null,
        "cores": [
            "Bege"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 96
    },
    {
        "id": 9,
        "slug": "calca_cargo_branca_estampada",
        "nome": "Calça Cargo Branca Estampada",
        "categoria": "Calças",
        "preco": 169.9,
        "precoAnterior": 212.38,
        "descricao": "Calça cargo branca com detalhes gráficos e bolsos utilitários.",
        "imagens": [
            "calca_cargo_branca.jpg",
            "calca_cargo_branca_02.jpg",
            "calca_cargo_branca_costas.jpg",
            "calca_cargo_branca_modelo.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 103
    },
    {
        "id": 10,
        "slug": "calca_cargo_preta_detalhe_lateral",
        "nome": "Calça Cargo Preta com Detalhe Lateral",
        "categoria": "Calças",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Calça cargo preta com bolsos utilitários e detalhe lateral.",
        "imagens": [
            "calca_cargo_preta.jpg",
            "calca_cargo_preta_detalhe.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 110
    },
    {
        "id": 11,
        "slug": "calca_jeans_azul_clara",
        "nome": "Calça Jeans Azul-Clara",
        "categoria": "Calças",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Calça jeans azul-clara de modelagem casual e lavagem clara.",
        "imagens": [
            "calca_jeans_azul_clara.jpg",
            "calca_jeans_azul_clara_detalhe.jpg",
            "calca_jeans_azul_modelo.jpg"
        ],
        "modelo": null,
        "cores": [
            "Azul Claro"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 117
    },
    {
        "id": 12,
        "slug": "calca_jeans_baggy_azul",
        "nome": "Calça Jeans Baggy Azul",
        "categoria": "Calças",
        "preco": 199.9,
        "precoAnterior": 249.88,
        "descricao": "Calça jeans baggy azul com modelagem ampla e caimento urbano.",
        "imagens": [
            "calca_jeans_baggy_azul.jpg",
            "calca_jeans_baggy_azul_costas.jpg",
            "calca_jeans_baggy_azul_02.jpg",
            "calca_jeans_baggy_azul_03.jpg",
            "calca_jeans_baggy_azul_04.jpg",
            "calca_jeans_baggy_azul_modelo.jpg"
        ],
        "modelo": null,
        "cores": [
            "Azul"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 131
    },
    {
        "id": 13,
        "slug": "blusa_preta_ombro_a_ombro",
        "nome": "Blusa Preta Ombro a Ombro",
        "categoria": "Blusas",
        "preco": 99.9,
        "precoAnterior": 124.88,
        "descricao": "Blusa preta de manga longa com decote ombro a ombro e modelagem ajustada.",
        "imagens": [
            "blusa_feminina_preta.jpg",
            "blusa_feminina_preta_costas.jpg",
            "blusa_preta_feminina_ga.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 145
    },
    {
        "id": 15,
        "slug": "camiseta_branca_animal_print",
        "nome": "Camiseta Branca com Estampa Animal Print",
        "categoria": "Camisetas",
        "preco": 99.9,
        "precoAnterior": 124.88,
        "descricao": "Camiseta branca de manga curta com estampa gráfica em animal print.",
        "imagens": [
            "camiseta_branca_leopardo.jpg",
            "camiseta_branca_leopardo_02.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 159
    },
    {
        "id": 16,
        "slug": "camiseta_branca_estampa_floral",
        "nome": "Camiseta Branca com Estampa Floral",
        "categoria": "Camisetas",
        "preco": 89.9,
        "precoAnterior": 112.38,
        "descricao": "Camiseta branca de manga curta com estampa floral gráfica.",
        "imagens": [
            "camiseta_branca_estampa_vermelha.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 166
    },
    {
        "id": 19,
        "slug": "polo_cinza_estampa_grafica",
        "nome": "Polo Cinza com Estampa Gráfica",
        "categoria": "Polos",
        "preco": 129.9,
        "precoAnterior": 162.38,
        "descricao": "Polo cinza com gola tradicional e estampa gráfica.",
        "imagens": [
            "polo_cinza_grafica.jpg",
            "polo_cinza_grafica_costas.jpg",
            "polo_cinza_preto_lateral.jpg"
        ],
        "modelo": null,
        "cores": [
            "Cinza"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 187
    },
    {
        "id": 21,
        "slug": "polo_preta_estampa_caveira",
        "nome": "Polo Preta com Estampa de Caveira",
        "categoria": "Polos",
        "preco": 99.9,
        "precoAnterior": 124.88,
        "descricao": "Polo preta de manga curta com estampa gráfica de caveira.",
        "imagens": [
            "camiseta_preta_estampada.jpg",
            "camiseta_preta_basica.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 201
    },
    {
        "id": 22,
        "slug": "polo_preta_estampa_grafica",
        "nome": "Polo Preta com Estampa Gráfica",
        "categoria": "Polos",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Polo preta de manga curta com estampa gráfica e visual urbano.",
        "imagens": [
            "camiseta_preta_estampada_02.jpg",
            "polo_preta_grafica_modelo.jpg",
            "camiseta_roxa_basica.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 208
    },
    {
        "id": 23,
        "slug": "camiseta_preta_i_wish_i_was_real",
        "nome": "Camiseta Preta \"I Wish I Was Real\"",
        "categoria": "Camisetas",
        "preco": 79.9,
        "precoAnterior": 99.88,
        "descricao": "Camiseta preta de manga curta com a estampa \"I wish I was real\".",
        "imagens": [
            "camiseta_preta_i_wish.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 215
    },
    {
        "id": 24,
        "slug": "polo_rosa_animal_print",
        "nome": "Polo Rosa com Estampa Animal Print",
        "categoria": "Polos",
        "preco": 139.9,
        "precoAnterior": 174.88,
        "descricao": "Polo rosa com estampa animal print, gola contrastante e visual urbano.",
        "imagens": [
            "polo_rosa_leopardo_02.jpg",
            "polo_rosa_leopardo_01.jpg",
            "polo_rosa_leopardo_03.jpg"
        ],
        "modelo": null,
        "cores": [
            "Rosa",
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 222
    },
    {
        "id": 26,
        "slug": "moletom_branco_basico",
        "nome": "Moletom Branco Básico",
        "categoria": "Moletons",
        "preco": 169.9,
        "precoAnterior": 187.38,
        "descricao": "Moletom branco básico de manga longa, com capuz e modelagem confortável.",
        "imagens": [
            "moletom_branco_basico.jpg",
            "moletom_branco_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Branco"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 236
    },
    {
        "id": 27,
        "slug": "cinto_vermelho_estampa_grafica",
        "nome": "Cinto Vermelho com Estampa Gráfica",
        "categoria": "Acessórios",
        "preco": 69.9,
        "precoAnterior": 87.38,
        "descricao": "Cinto vermelho com estampa gráfica e visual urbano.",
        "imagens": [
            "cinto_vermelho.jpg",
            "cinto_vermelho_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Vermelho",
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 243
    },
    {
        "id": 28,
        "slug": "conjunto_puffer_verde",
        "nome": "Conjunto Puffer Verde",
        "categoria": "Conjuntos",
        "preco": 249.9,
        "precoAnterior": 312.38,
        "descricao": "Conjunto verde com peças de visual puffer e proposta urbana.",
        "imagens": [
            "conjunto_puffer_verde_modelo.jpg",
            "conjunto_puffer_verde_costas.jpg",
            "conjunto_puffer_verde_detalhe.jpg"
        ],
        "modelo": null,
        "cores": [
            "Verde"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 250
    },
    {
        "id": 29,
        "slug": "jaqueta_corta_vento_preta_com_capuz",
        "nome": "Jaqueta Corta-Vento Preta com Capuz",
        "categoria": "Jaquetas",
        "preco": 219.9,
        "precoAnterior": 274.88,
        "descricao": "Jaqueta corta-vento preta com capuz, fechamento frontal e modelagem leve.",
        "imagens": [
            "jaqueta_corta_vento_preta_modelo.jpg",
            "jaqueta_corta_vento_preta_modelo_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 257
    },
    {
        "id": 30,
        "slug": "jaqueta_preta_com_capuz",
        "nome": "Jaqueta Preta com Capuz",
        "categoria": "Jaquetas",
        "preco": 229.9,
        "precoAnterior": 287.38,
        "descricao": "Jaqueta preta com capuz e visual esportivo urbano.",
        "imagens": [
            "jaqueta_preta_capuz.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 264
    },
    {
        "id": 31,
        "slug": "jaqueta_preta_mangas_graficas",
        "nome": "Jaqueta Preta com Mangas Gráficas",
        "categoria": "Jaquetas",
        "preco": 219.9,
        "precoAnterior": 274.88,
        "descricao": "Jaqueta preta com detalhes gráficos nas mangas e modelagem urbana.",
        "imagens": [
            "jaqueta_preta_mangas_graficas.jpg",
            "jaqueta_preta_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 271
    },
    {
        "id": 32,
        "slug": "jaqueta_puffer_preta_com_capuz",
        "nome": "Jaqueta Puffer Preta com Capuz",
        "categoria": "Jaquetas",
        "preco": 299.9,
        "precoAnterior": 374.88,
        "descricao": "Jaqueta puffer preta com capuz e volume acolchoado.",
        "imagens": [
            "jaqueta_puffer_preta_capuz.jpg",
            "jaqueta_puffer_preta_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 278
    },
    {
        "id": 35,
        "slug": "polo_preta_los_angeles",
        "nome": "Polo Preta Los Angeles",
        "categoria": "Polos",
        "preco": 179.9,
        "precoAnterior": 224.88,
        "descricao": "Polo preta de manga curta com estampa Los Angeles.",
        "imagens": [
            "polo_preto_losangeles.jpg"
        ],
        "modelo": null,
        "cores": [
            "Preto"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 299
    },
    {
        "id": 36,
        "slug": "moletom_vermelho_com_capuz",
        "nome": "Moletom Vermelho com Capuz",
        "categoria": "Moletons",
        "preco": 169.9,
        "precoAnterior": 212.38,
        "descricao": "Moletom vermelho com capuz e modelagem confortável.",
        "imagens": [
            "moletom_vermelho_capuz.jpg",
            "moletom_vermelho_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Vermelho"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 306
    },
    {
        "id": 37,
        "slug": "polo_listrada_azul_branca",
        "nome": "Polo Listrada Azul e Branca",
        "categoria": "Polos",
        "preco": 129.9,
        "precoAnterior": 162.38,
        "descricao": "Polo listrada em azul, branco e vermelho, com gola tradicional.",
        "imagens": [
            "polo_listrada_azul_branca_costas.jpg",
            "polo_listrada_azul_branca.jpg"
        ],
        "modelo": null,
        "cores": [
            "Azul",
            "Branco",
            "Vermelho"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 313
    },
    {
        "id": 38,
        "slug": "polo_rosa_listrada",
        "nome": "Polo Rosa Listrada",
        "categoria": "Polos",
        "preco": 119.9,
        "precoAnterior": 149.88,
        "descricao": "Polo rosa listrada de manga curta com gola tradicional.",
        "imagens": [
            "polo_rosa_listrada.jpg",
            "polo_rosa_listrada_costas.jpg"
        ],
        "modelo": null,
        "cores": [
            "Rosa"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 320
    },
    {
        "id": 39,
        "slug": "sueter_texturizado_cinza",
        "nome": "Suéter Texturizado Cinza",
        "categoria": "Suéteres",
        "preco": 219.9,
        "precoAnterior": 274.88,
        "descricao": "Suéter cinza de malha texturizada e modelagem confortável.",
        "imagens": [
            "sueter_cinza_texturizado.jpg",
            "sueter_cinza_texturizado_costas.jpg",
            "sueter_cinza_texturizado_detalhe.jpg"
        ],
        "modelo": null,
        "cores": [
            "Cinza"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 327
    },
    {
        "id": 40,
        "slug": "camiseta_cinza_boston_23",
        "nome": "Camiseta Cinza \"Boston 23\"",
        "categoria": "Camisetas",
        "preco": 109.9,
        "precoAnterior": 137.38,
        "descricao": "Camiseta cinza de manga curta com estampa esportiva \"Boston 23\".",
        "imagens": [
            "camiseta_cinza_23.jpg",
            "camiseta_cinza_23_modelo.jpg"
        ],
        "modelo": null,
        "cores": [
            "Cinza"
        ],
        "tamanhos": [
            "P",
            "M",
            "G",
            "GG",
            "XG"
        ],
        "avaliacao": 4.8,
        "avaliacoes": 96
    }
];
