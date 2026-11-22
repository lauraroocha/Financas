# Finanças — Laura & Rodrigo

App web de controle financeiro mensal. Funciona offline e pode ser instalado na tela inicial do celular (PWA).

## Estrutura
- `index.html`: app completo (HTML + lógica em JavaScript).
- `css/app.css`: Tailwind já compilado + fontes locais (gerado a partir de `src/input.css` e `tailwind.config.js`).
- `vendor/`: Lucide (ícones) e PDF.js (leitura de fatura em PDF), copiados localmente.
- `fonts/`: Playfair Display e Plus Jakarta Sans.
- `icons/`: ícone oficial do app (192, 512, apple-touch e favicon).
- `manifest.json` e `sw.js`: instalação como app e uso offline.

## Como publicar (necessário para instalar e usar offline)
O navegador só liga o modo offline/instalável quando o app é aberto por um endereço `https://`. Suba a pasta inteira em uma hospedagem estática gratuita (Netlify Drop, GitHub Pages ou Cloudflare Pages). Depois, no celular: abrir o endereço > Compartilhar > "Adicionar à Tela de Início".
Os dados ficam no navegador do aparelho (`localStorage`), por isso o backup em JSON é importante.

## Regras do app
1. **Visões**: `Visão Individual` (40% dos gastos compartilhados + 100% Laura) e `Visão Casal (100%)` (ignora lançamentos `100% Laura`).
2. **Divisão**: compartilhados `60/40 Casal` (Rodrigo 60% / Laura 40%); individuais `100% Laura`.
3. **Acerto com Rodrigo**: 60% de financiamento + condomínio + lançamentos no `Cartão Casal` (60/40) + lançamentos no `Splitwise` (60/40). Pagamentos podem ser parciais; o app mostra Pendente, Parcial, Quitado ou Crédito.
4. **Mês da fatura**: faturas importadas ficam no mês do vencimento (a data de cada compra é mantida). Editar um lançamento só muda o mês se a data for alterada.
5. **Backup**: ao criar um novo mês o app oferece salvar um backup JSON (no celular abre Arquivos/iCloud/Drive). Também há Exportar/Importar no menu do ícone `$`.
6. **Desfazer**: excluir um lançamento mostra um aviso com "Desfazer" por 7 segundos.
7. Salário, financiamento e condomínio de cada mês são ajustados manualmente (novo mês copia o mês anterior).

## Se mudar o código
Se o `index.html` ganhar classes Tailwind novas, recompile o CSS: `npm install` e `npm run build:css`. Se publicar uma versão nova, mude `CACHE` em `sw.js` (ex.: `financas-v2`) para forçar a atualização offline.

## Prompt para replicar em outra IA
> "Com base no `index.html` deste ZIP, mantenha a identidade visual (fundo creme `#F3EDE4`, cartões `#FAF7F2`, ameixa `#4A1D2F` e taupe `#8F7B6C`, fontes Playfair Display e Plus Jakarta Sans), as abas Início, Lançamentos e Metas, o seletor de mês e o toggle Visão Individual / Visão Casal (100%), e aplique as melhorias solicitadas sem perder o backup JSON."
