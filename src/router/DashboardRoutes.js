import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import { Navbar } from '../components/ui/Navbar'

import { InglesScreen } from '../components/ingles/InglesScreen'
import { InicioScreen } from '../components/inicio/InicioScreen'
import { MentoriaScreen } from '../components/mentoria/MentoriaScreen'
import { ProyectosScreen } from '../components/proyectos/ProyectosScreen'
import { ReactivistasScreen } from '../components/reactivistas/ReactivistasScreen'
import { EventosScreen } from '../components/eventos/EventosScreen'
import { ComunidadScreen } from '../components/comunidad/ComunidadScreen'
import { EquipoScreen } from '../components/equipo/EquipoScreen'
import { guiareactivistas } from '../components/docs/guia-reactivistas'
import { guiamentorias } from '../components/docs/guia-para-realizar-mentorias'
import { codigodeconducta } from '../components/docs/codigo-de-conducta'

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact path='/'
            component={InicioScreen}
          />
          <Route
            exact path='/mentorias'
            component={MentoriaScreen}
          />
          <Route
            exact path='/ingles'
            component={InglesScreen}
          />
          <Route
            exact path='/proyectos'
            component={ProyectosScreen}
          />
          <Route
            exact path='/reactivistas'
            component={ReactivistasScreen}
          />
          <Route
            exact path='/eventos'
            component={EventosScreen}
          />
          <Route
            exact path='/comunidad'
            component={ComunidadScreen}
          />
          <Route
            exact path='/equipo'
            component={EquipoScreen}
          />
          <Route
            exact path='/docs/guia-reactivistas'
            component={guiareactivistas}
          />
          <Route
            exact path='/docs/guia-para-realizar-mentorias'
            component={guiamentorias}
          />
          <Route
            exact path='/docs/codigo-de-conducta'
            component={codigodeconducta}
          />
          <Redirect to='/' />
        </Switch>
      </div>

    </>
  )
}
