# ADR-004: Hospedagem de Vídeos Nativos via Google Drive Embed

**Date:** 2026-02-28
**Status:** Accepted

## Context

A Landing Page possui uma seção "Momentos" que demanda incorporar 29 módulos de vídeos curtos. Esses vídeos foram originalmente gravados pela cliente de forma nativa em orientação estritamente vertical (*9:16*, formato comum em TikToks/Reels de celulares).

## Decision

Decidimos fazer o embedding (incorporar) os próprios URLs diretos de visualização `/preview` hospedados nativamente dentro do diretório do **Google Drive** onde a cliente arquiva os materiais. Para corrigir o problema de renderização de preview do Google (que tenta sempre criar um bounding-box retangular de player de TV), estilizamos todos os `iframes` de grid forçando hardcode CSS `aspect-[9/16]`.

## Alternatives Considered

- *YouTube Embeds:* Rejeitado por dois motivos. Primeiro, forçaria a abertura do canal YouTube da cliente fora do evento ou mostraria propagandas relacionadas no final. Segundo, os Shorts do YT incorporados carregam blocos interativos e barras horizontais pretas na tela do Web Player limitando a estética premium visual que a interface exibe.
- *Vimeo Pro / Video Hosting Premium:* O custo inicial seria alto apenas para alocar vídeos passados (edição 3) como demonstração na Landing Page e obrigaria gestão externa da cliente fora de suas pastas seguras da nuvem do Google de uso cotidiano da Luh Pimentel.

## Consequences

- **Prós:** Escalabilidade imensa de dados isenta de custos para servidor. Praticidade suprema à agência promotora (apenas jogar seus mp4 no Drive e copiar IDs de Preview para renderizar na grade responsiva do site verticalmente). Modesta performance limpa, economizando processamento da host (Vercel) na interface final.
- **Contras:** Player rudimentar e preterível para Analytics (diferente de rastrear VTA longo num vídeo listado no youtube), porém serve como estante passiva de conteúdos rápidos perfeitamente enquadrada. Existe flutuação na banda de bufferização do Google em dias de tráfego intenso por ser Drive não dedutível de Stream.

## Rule for Future Projects

O "Hack" do aspect ratio com iframe embutindo diretórios em nuvem é plenamente sugerido em "landing pages bootstrap" com dezenas de depoimentos não estáticos em grid. O Grid deve obrigatoriamente forçar o contentor das mídias com `aspect-[9/16]` sempre que as fontes venham de Redes Verticais preservando as capinhas iniciais em displays móveis. Ao buscar rastreamento métrico (Conversion Tracking), reverte-se esta decisão e aprovisionam-se mídias pagas dedicadas compatíveis com Pixels de plataforma.
