let dernierCaractere = '';

        function val(resultat) {
            if (estOperateur(resultat)) {
                const derniereValeur = form.fenetre.value;
                const derniereValeurSansDernierCaractere = derniereValeur.slice(0, -1);

                if (estOperateur(dernierCaractere)) {
                    // Remplacer le dernier opérateur par le nouvel opérateur
                    form.fenetre.value = derniereValeurSansDernierCaractere + resultat;
                } else {
                    // Ajouter le nouvel opérateur à la fin de la valeur actuelle
                    form.fenetre.value = derniereValeur + resultat;
                }
            } else {
                // Concaténer le nombre à la fin de la valeur actuelle
                form.fenetre.value = form.fenetre.value + resultat;
            }
            dernierCaractere = resultat;
        }
        function estOperateur(caractere) {
            const operateurs = ['+', '-', '*', '/'];
            return operateurs.includes(caractere);
        }

        function suppr() {
            form.fenetre.value = "";
        }
        function calcule() {
            if (form.fenetre.value == "") {
            } else {
                try {
                    const result = eval(form.fenetre.value);
                    if (result === Infinity) {
                        form.fenetre.value = "Division par zéro !";
                    } else {
                        form.fenetre.value = result;
                    }
                } catch (error) {
                    form.fenetre.value = "Erreur de syntaxe !";
                }
            }
        }