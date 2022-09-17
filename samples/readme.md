# Samples
* generate mermaid from sql using schema crawler
* from https://dev.to/sualeh/how-to-generate-mermaid-diagrams-for-your-database-33bn
* run
  * `cd samples`
  * generate mermaid, TODO: get mermaid generator working
    ```bash
    docker run \
    --mount type=bind,source="$(pwd)",target=/home/schcrwlr \
    --rm -it \
    schemacrawler/schemacrawler \
    /opt/schemacrawler/schemacrawler.sh \
    --server=sqlite \
    --database=chinook-database-2.0.1.sqlite \
    --info-level=standard \
    --command script \
    --script-language python \
    --script mermaid.py
    ```