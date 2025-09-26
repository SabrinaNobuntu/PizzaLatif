# Lista de todos os arquivos do projeto (com caminhos relativos)

find . -type f | sed 's|^./||' | sort > all_files.txt

echo "Arquivo all_files.txt gerado com sucesso!"
