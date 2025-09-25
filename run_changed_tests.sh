# Vá para a raiz do projeto
cd /c/Users/jean.lima/projetos/pizzalatif

# Garante que os scripts têm permissão de execução
chmod +x .github/scripts/detect_changed_files.sh
chmod +x .github/scripts/run_tests_by_changed_files.sh

# Gera o arquivo de arquivos alterados comparando com a branch main
.github/scripts/detect_changed_files.sh origin/main HEAD > changed_files.txt

# Verifica se o arquivo foi criado e exibe o conteúdo
if [ -s changed_files.txt ]; then
  echo "Arquivos alterados:"
  cat changed_files.txt

  # Roda os testes de backend
  .github/scripts/run_tests_by_changed_files.sh changed_files.txt backend

  # Roda os testes de frontend
  .github/scripts/run_tests_by_changed_files.sh changed_files.txt frontend
else
  echo "Nenhum arquivo alterado detectado."
fi
