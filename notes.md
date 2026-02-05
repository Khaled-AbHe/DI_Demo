# Étapes pour utiliser module X dans le module Y

1. On va rendre le service du module X dispo au autres
 - Ajouter le service dans la liste d'exports dans le module

2. Ajouter la module X dans la liste d'imports dans le module Y

# Les 3 Scopes
Default: Au démarrage de l'app -> Singleton
Request: À chaque request, une instance pour tous
Transcient: À chaue injection