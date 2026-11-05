---
layout: default
---
# Marqueurs de non-connexion
{: #no-connects}

Les marqueurs de non-connexion indiquent qu’une broche est volontairement laissée sans connexion.

Utilisez-les lorsqu’une broche de symbole n’est pas utilisée dans votre conception, mais que vous souhaitez le signaler clairement à toute personne lisant le schéma ainsi qu’au vérificateur des règles de conception.

## À quoi servent les marqueurs de non-connexion
{: #what-no-connects-are-for}

- documenter les broches inutilisées intentionnellement,
- réduire les ambiguïtés lors de la revue,
- éviter les avertissements/erreurs du DRC pour les broches laissées ouvertes par conception.

Les exemples typiques comprennent les entrées logiques inutilisées, les canaux d’amplificateur opérationnel de réserve ou les broches de connecteur inutilisées.

## Comment placer des marqueurs de non-connexion
{: #how-to-place-no-connects}

1. Sélectionnez l’outil No Connect (Non-connecté).
2. Placez le marqueur directement sur la broche inutilisée (ou le point à laisser ouvert).
3. Répétez l’opération pour chaque broche volontairement laissée sans connexion.

Les marqueurs de non-connexion sont de simples marqueurs : ils peuvent être déplacés ou supprimés après leur placement, mais ne peuvent pas être modifiés autrement.

## Bonnes pratiques
{: #best-practices}

- Utilisez systématiquement les marqueurs de non-connexion sur toutes les broches volontairement laissées ouvertes.
- Ne placez pas de marqueurs de non-connexion sur les broches qui devront être câblées ultérieurement.
- Exécutez le DRC après les modifications importantes afin de détecter les nouvelles broches sans connexion.

- Retour à [Dessin](../User-guide/)
- Retour au [sommaire de v4](../CONTENTS/)
