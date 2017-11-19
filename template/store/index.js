
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      wohnungssuche: {
        title: 'Wohnungssuche',
        topic: 'wohnungssuche',
        topicId: 1,
        meta: {},
        subtopics: [
          {
            subtopicTitle: 'Auskünfte',
            questions: [
              {
                mainQuestion: 'Welche Auskünfte darf ein Vermieter verlangen?',
                topicId: 11,
                yesNo: false,
                answers: [
                  `<p>Ein Vermieter darf Informationen verlangen, welche relevant für die Überprüfung von Bewerbern sind. Insbesondere folgende Informationen gelten als relevant:<p>
                    <ul>
                      <li>Name und Adresse</li>
                      <li>Geburtsdatum und Zivilstand</li>
                      <li>Anzahl Personen und Tiere, welche in der Wohnung/Haus leben werden</li>
                      <li>Beruf, Einkommen und Name des Arbeitgebers</li>
                      <li>Betreibungen</li>
                      <li>Zu erwartender Lärm (z.B. ein Musikinstrument)</li>
                      <li>Ob man die Wohnung wechselt weil der bisherige Vermieter gekündigt hat und warum man die Kündigung erhalten hat</li>
                      <li>Alle Information, welche kantonale Behörden verlangen</li>
                      <li>Referenzen dürfen nur nach Einwilligung des Mieters eingeholt werden und nur zur Überprüfung Ihrer Angaben in der Bewerbung dienen. Ausserdem darf der Vermieter keine Angaben einholen, wenn er Ihnen nicht ernsthaft die Wohnung gegen will.</li>
                    </ul>
                  <p>Folgende Auskünfte darf ein Vermieter nicht verlangen:</p>
                    <ul>
                      <li>Strafregisterauszug</li>
                      <li>Wie vermögend man ist (z.B. Fragen zu Ihrem Vermögen oder ob Sie jemandem Geld schulden)</li>
                      <li>Informationen zur letzten Wohnung (z.B. wieviel man bezahlt hat oder der Name Ihrer vorherigen Verwaltung)</li>
                      <li>Ob man an einer Krankheit leidet (Ausnahme: Wenn es sich um eine Spezialwohnung für Leute mit gesundheitlichen Problemen handelt)</li>
                      <li>Ob man sich in einer Notlage befindet (z.B. weil es sehr schwierig ist eine Wohnung zu finden oder persönliche Probleme)</li>
                      <li>Ob man sich in einer Notlage befindet (z.B. weil es sehr schwierig ist eine Wohnung zu finden oder persönliche Probleme)</li>
                      <li>Ob man Mitglied im Mieterverband ist</li>
                      <li>Ob man ein Interesse daran hat noch weitere Verträge abzuschliessen (z.B. eine Versicherung oder ob man etwas kaufen möchte)</li>
                      <li>Ob man die Miete für zu hoch oder zu tief hält</li>
                    </ul>
                  <p>Falls der Vermieter Sie etwas gefragt hat, was er/sie nicht durfte und Sie haben falsche Angaben gemacht haben, dann kann Ihnen dies nicht vorgeworfen werden.</p>`,
                ],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Welche Auskünfte muss Ihnen ein Vermieter geben?',
                topicId: 12,
                yesNo: false,
                answers: [`<p>Der Vermieter muss über alles Wichtige zur Wohnung Auskunft geben, was Sie sonst nicht erfahren könnten. Das sind insbesondere die Nebenkosten sowie Schäden und Probleme mit der Wohnung, welche nicht sichtbar sind. Aber auch zukünftige Pläne wie z.B. Bauarbeiten oder Erhöhungen des Mietzinses müssen Ihnen mitgeteilt werden.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Sind Vertragsveränderungen erlaubt?',
                topicId: 13,
                yesNo: false,
                answers: [`<p>Ja, jedoch muss sowohl der Mieter wie der Vermieter einverstanden sein und aus Beweisgründen sollten Sie Änderungen immer schriftlich festhalten. Falls nur der Vermieter oder Mieter eine Änderung möchte, z.B. die Miete erhöhen, dann ist dafür jedoch ein spezielles Vorgehen nötig.</p>`],
                subQuestions: [
                ]
              }
            ]
          }
        ]
      },
      vertragsabschluss: {
        title: 'Vertragsabschluss und -gültigkeit',
        topic: 'vertragsabschluss',
        topicId: 2,
        meta: {},
        subtopics: [
          {
            subtopicTitle: 'Vertrag',
            questions: [
              {
                mainQuestion: 'Habe ich einen gültigen Vertrag abgeschlossen?',
                topicId: 21,
                yesNo: true,
                answers: [
                  `<p>Beantworten Sie folgende Fragen um eine detailiertere Antwort zu erhalten</p>`
                ],
                subQuestions: [
                  'Haben Sie sich über die Höhe der Miete geeinigt?',
                  'Haben Sie sich über die Mietwohnung/Haus und was genau sie mieten geeinigt?',
                  'Haben Sie jemals einen Vertrag unterzeichnet?'
                ],
                subAnswers: [
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich keinen gültigen Vertrag abgeschlossen, da man sich für einen Mietvertrag sowohl über die Miete wie auch die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben muss. Dies ist insbesondere der Fall, falls nichts Schriftliches vereinbart wurde. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Das ist auch dann so, wenn Sie keinen schriftlichen Vertrag haben oder es keine Beweise für eine mündliche Vereinbarung gibt. Beachten Sie ausserdem, dass selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, der Vertrag trotzdem gilt, wenn sie sich zumindest über die Miete sowie die Mietwohnung/Haus bzw. entsprechende Räume geeinigt haben (wenn Sie bereits in der Wohnung leben und länger Miete bezahlen gilt dies als Einigung).',
                  'Sie haben wahrscheinlich einen gültigen Vertrag abgeschlossen, da sie sich über die Miete und die Wohnung/Haus, welches sie mieten, geeinigt haben. Dazu ist keine schriftlicher Vertrag erforderlich. Jedoch sind mündliche Abmachungen manchmal schwierig zu beweisen. Falls Sie aber bereits in der Wohnung leben und regelmässig Miete bezahlen, dann gilt dies normalerweise als Mietvertrag. Selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, gilt der Vertrag trotzdem.',
                  'Sie haben wahrscheinlich einen gültigen Vertrag abgeschlossen, da sie sich über die Miete und die Wohnung/Haus, welches sie mieten, geeinigt und dies auch schriftlich festgehalten haben. Selbst wenn sie mit dem Vermieter nicht über alle Details in Vertrag einig sind, gilt der Vertrag trotzdem.',
                ],
              },
              {
                mainQuestion: 'Sind Vertragsveränderungen erlaubt?',
                topicId: 22,
                yesNo: false,
                answers: [`<p>Ja, jedoch muss sowohl der Mieter wie der Vermieter einverstanden sein und aus Beweisgründen sollten Sie Änderungen immer schriftlich festhalten. Falls nur der Vermieter oder Mieter eine Änderung möchte, z.B. die Miete erhöhen, dann ist dafür jedoch ein spezielles Vorgehen nötig.</p>`],
                subQuestions: [
                ]
              },
              {
                mainQuestion: 'Gehören Allgemeine Bestimmungen zum Vertrag?',
                topicId: 23,
                yesNo: false,
                answers: [`<p>Ja, wenn im Vertrag auf Allgemeine Bestimmungen hingewiesen wird, dann gelten diese grundsätzlich als Teil des Vertrages, ausser diese sind sehr ungewöhnlich oder irreführend. Wenn der Vermieter jedoch später die Allgemeinen Bestimmungen ändert gelten diese Änderungen nicht für den Mieter ausser beide Parteien waren einverstanden oder solche Änderungen sind ausdrücklich im Vertrag vorgesehen.</p>`],
                subQuestions: [
                ]
              }
            ]
          }
        ]
      }
    }
  })
}

export default createStore
